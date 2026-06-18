import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  async function contacted(event) {
    event.preventDefault();
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
          name: userData.Name,
          email: userData.Email,
          phone: userData.tel,
          message: userData.Requests,
          subject: "New Party Inquiry",
          from_name: "Liss Party Website",
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setOverlayState("success");
        setTimeout(() => {
          setOverlayState("");
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
              />
              <input
                type="email"
                name="Email"
                value={userData.Email}
                placeholder="Enter Your E-mail"
                autoComplete="off"
                onChange={data}
              />
              <input
                type="tel"
                name="tel"
                value={userData.tel}
                placeholder="Enter Your Phone #"
                autoComplete="off"
                onChange={data}
              />
              <textarea
                value={userData.Requests}
                name="Requests"
                placeholder="Enter Your Request Here"
                autoComplete="off"
                onChange={data}
                id=""
              ></textarea>
              <button className="submit__btn">Submit</button>
            </form>
            <button className="contact__close--btn" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div
              className={`contact__overlay contact__overlay--loading ${
                overlayState === "loading" ? "contact__overlay--visible" : ""
              }`}
            >
              <FontAwesomeIcon icon={faSpinner} className="spinner__icon" />
            </div>
            <div
              className={`contact__overlay contact__overlay--success ${
                overlayState === "success" ? "contact__overlay--complete" : ""
              }`}
            >
              Thanks for the message! I will reach out to you soon.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
