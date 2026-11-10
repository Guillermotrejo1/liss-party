import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

function Contact() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    tel: "",
    Requests: "",
  });
  const [overlayState, setOverlayState] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const successTimeoutRef = useRef(null);
  const normalizedEmail = userData.Email.trim();
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
  const showEmailHint = normalizedEmail.length > 0 && !isEmailValid;
  const isFormValid =
    userData.Name.trim() &&
    normalizedEmail &&
    userData.tel.trim() &&
    userData.Requests.trim() &&
    isEmailValid;

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
    setValidationMessage("");
  };

  const handleCloseModal = () => {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }
    setOverlayState("");
    dispatch(closeModal());
  };

  useLayoutEffect(() => {
    if (!isOpen) {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = null;
      }
      setOverlayState("");
      return;
    }

    // Ensure stale success/loading state never paints on modal re-open.
    setOverlayState("");
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  // While open: Escape closes, focus moves into the form, page scroll is locked
  const firstFieldRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement;
    firstFieldRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") dispatch(closeModal());
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [isOpen, dispatch]);

  async function contacted(event) {
    event.preventDefault();
    const normalizedData = {
      Name: userData.Name.trim(),
      Email: userData.Email.trim(),
      tel: userData.tel.trim(),
      Requests: userData.Requests.trim(),
    };

    if (!normalizedData.Name || !normalizedData.Email || !normalizedData.tel || !normalizedData.Requests) {
      setValidationMessage("Please complete all fields before submitting.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedData.Email)) {
      setValidationMessage("Please enter a valid email address.");
      return;
    }

    setValidationMessage("");
    setOverlayState("loading");
    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      alert("Web3Forms access key is missing. Add REACT_APP_WEB3FORMS_ACCESS_KEY to your .env file.");
      setOverlayState("");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: normalizedData.Name,
          email: normalizedData.Email,
          phone: normalizedData.tel,
          message: normalizedData.Requests,
          subject: "New Party Inquiry",
          from_name: "Liss Party Website",
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setOverlayState("success");
        if (successTimeoutRef.current) {
          clearTimeout(successTimeoutRef.current);
        }
        successTimeoutRef.current = setTimeout(() => {
          setOverlayState("");
          successTimeoutRef.current = null;
        }, 3000);
        setUserData({ Name: "", Email: "", tel: "", Requests: "" });
      } else {
        throw new Error(result.message || "Web3Forms request failed");
      }
    } catch (error) {
      alert("This email service is temporarily unavailable.");
      setOverlayState("");
      console.error("Web3Forms error:", error);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="contact__container"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCloseModal();
      }}
    >
      <div
        className="contact__box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        aria-describedby="contact-desc"
      >
        <h2 id="contact-title" className="contact__title">
          Let's create something
        </h2>
        <p id="contact-desc" className="contact__desc">
          Tell me about your event or idea and I'll get back to you soon.
        </p>

        <form onSubmit={contacted} noValidate>
          <label className="contact__field">
            <span className="contact__label">Full name</span>
            <input
              ref={firstFieldRef}
              type="text"
              name="Name"
              value={userData.Name}
              autoComplete="name"
              onChange={data}
              required
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">Email</span>
            <input
              type="email"
              name="Email"
              value={userData.Email}
              autoComplete="email"
              onChange={data}
              aria-invalid={showEmailHint}
              aria-describedby={showEmailHint ? "contact-email-hint" : undefined}
              required
            />
          </label>
          {showEmailHint && (
            <p id="contact-email-hint" className="contact__field-hint">
              Please enter a valid email format (example@gmail.com).
            </p>
          )}

          <label className="contact__field">
            <span className="contact__label">Phone number</span>
            <input
              type="tel"
              name="tel"
              value={userData.tel}
              autoComplete="tel"
              onChange={data}
              required
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">Your request</span>
            <textarea
              value={userData.Requests}
              name="Requests"
              onChange={data}
              required
            ></textarea>
          </label>

          {validationMessage && (
            <p className="contact__validation" role="alert">
              {validationMessage}
            </p>
          )}
          <button type="submit" className="submit__btn" disabled={!isFormValid}>
            Submit
          </button>
        </form>

        <button
          type="button"
          className="contact__close--btn"
          onClick={handleCloseModal}
          aria-label="Close contact form"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Announced to screen readers when the status changes */}
        <div aria-live="polite">
          {overlayState === "loading" && (
            <div className="contact__overlay contact__overlay--loading contact__overlay--visible">
              <FontAwesomeIcon icon={faSpinner} className="spinner__icon" />
              <span className="sr-only">Sending your message…</span>
            </div>
          )}
          {overlayState === "success" && (
            <div className="contact__overlay contact__overlay--success contact__overlay--complete">
              Thanks for the message! I will reach out to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
