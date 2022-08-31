import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const Footer = () => {
  const [nameError, setNameError] = useState(false);
  const nameRef = useRef();
  const messageRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  let formIsValid = false;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const nameValid = nameRef.current.value.trim() !== "";
    const messageValid = messageRef.current.value.trim() !== "";
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );

    if (nameValid && messageValid && emailValid) {
      formIsValid = true;
    }

    if (formIsValid) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    }

    if (emailValid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (nameValid) {
      setNameError(false);
    } else {
      setNameError(true);
    }

    if (messageValid) {
      setMessageError(false);
    } else {
      setMessageError(true);
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:abdelrahmanelhagrasy661@gmail.com" className="p-text">
            abdelrahmanelhagrasy661@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+31685738303" className="p-text">
            +31685738303
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className={nameError ? "p-text error" : "p-text"}
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
              ref={nameRef}
            />
          </div>
          {nameError && (
            <p style={{ color: "red" }}>Please enter a valid name</p>
          )}

          <div className="app__flex">
            <input
              className={emailError ? "p-text error" : "p-text"}
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          {emailError && (
            <p style={{ color: "red" }}>Please enter a valid email</p>
          )}
          <div>
            <textarea
              className={messageError ? "p-text error" : "p-text"}
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
              ref={messageRef}
            />
          </div>
          {messageError && (
            <p style={{ color: "red" }}>Please enter a message</p>
          )}
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
