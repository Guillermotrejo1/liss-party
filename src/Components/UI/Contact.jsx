import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

function Contact() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(
    {
      Name: "", Email: "", tel: "", Requests: ""
    }
  )
 
  let name, value
  const data = (e) => 
  {
    name = e.target.name
    value = e.target.value
    setUserData({...userData, [name]:value})
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  

  if (!isOpen) return null;


  return (
    <div className="contact__container">
      {isOpen && (
        <>
          <div className="contact__box">
            <form method="POST">
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
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
