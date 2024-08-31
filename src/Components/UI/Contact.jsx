import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

function Contact() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  if (!isOpen) return null;

  return (
    <div className="contact__container">
      {isOpen && (
        <>
          <div className="contact__box">
            <form action="">
              <input
                type="text"
                name="Name"
                value=""
                placeholder="Enter Your Full Name"
                autoComplete="off"
              />
              <input
                type="email"
                name="Email"
                value=""
                placeholder="Enter Your E-mail"
                autoComplete="off"
              />
              <input
                type="tel"
                name="phoneNumber"
                value=""
                placeholder="Enter Your Phone #"
                autoComplete="off"
              />
              <textarea
                value=""
                name="Requests"
                placeholder="Enter Your Request Here"
                autoComplete="off"
                id=""
              ></textarea>
              <button className="submit__btn">Submit</button>
            </form>
            <button className="contact__close--btn" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
