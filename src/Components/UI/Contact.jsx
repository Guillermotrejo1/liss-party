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
    <div className="contact__container">
      {isOpen && (
        <>
          <div className="contact__box">
            <form onSubmit={contacted}>
              <input
                type="text"
                name="Name"
                value={userData.Name}
                placeholder="Enter Your Full Name"
                autoComplete="off"
                onChange={data}
                required
              />
              <input
                type="email"
                name="Email"
                value={userData.Email}
                placeholder="Enter Your E-mail"
                autoComplete="off"
                onChange={data}
                aria-invalid={showEmailHint}
                required
              />
              {showEmailHint && (
                <p className="contact__field-hint">Please enter a valid email format (example@gmail.com).</p>
              )}
              <input
                type="tel"
                name="tel"
                value={userData.tel}
                placeholder="Enter Your Phone #"
                autoComplete="off"
                onChange={data}
                required
              />
              <textarea
                value={userData.Requests}
                name="Requests"
                placeholder="Enter Your Request Here"
                autoComplete="off"
                onChange={data}
                required
              ></textarea>
              {validationMessage && <p className="contact__validation">{validationMessage}</p>}
              <button className="submit__btn" disabled={!isFormValid}>
                Submit
              </button>
            </form>
            <button className="contact__close--btn" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {overlayState === "loading" && (
              <div className="contact__overlay contact__overlay--loading contact__overlay--visible">
                <FontAwesomeIcon icon={faSpinner} className="spinner__icon" />
              </div>
            )}
            {overlayState === "success" && (
              <div className="contact__overlay contact__overlay--success contact__overlay--complete">
                Thanks for the message! I will reach out to you soon.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
