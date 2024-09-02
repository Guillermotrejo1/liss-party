import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import emailjs from '@emailjs/browser';


function Contact() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    tel: "",
    Requests: "",
  });
  const emailConfig = { // Define emailConfig
    serviceID: 'service_l3n5q49',
    templateID: 'template_eaf20gs',
    userID: '6lwnRd44-s_j_aSGk',
  };

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: userData.Name,
      from_email: userData.Email,
      phone: userData.tel,
      message: userData.Requests,
    };

    emailjs
      .send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.userID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Show success message
        document.querySelector(".contact__overlay--success").style.display =
          "block";
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
      console.log("it worked")
  };

  if (!isOpen) return null;

  return (
    <div className="contact__container">
      {isOpen && (
        <>
          <div className="contact__box">
            <form>
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
              <button className="submit__btn" onClick={(e) => sendEmail(e)}>
                Submit
              </button>
            </form>
            <button className="contact__close--btn" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="contact__overlay contact__overlay--loading">
              <FontAwesomeIcon icon={faSpinner} className="spinner__icon" />
            </div>
            <div className="contact__overlay contact__overlay--success">
              Thanks for the message! I will reach out to you soon.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
