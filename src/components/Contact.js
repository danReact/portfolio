import React from "react";
import "./style/contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact-container">
      <div className="contact-info">
        <div className="contact-title">
          <p>- Contact </p>
          Got a project?
          <br></br>
          Let´s talk.
        </div>
        <div className="contact-description">
          I enjoy creating things that live on the internet. Here are some
          things I’ve built.
          <p>daniel@dgtdan.com</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="form-section">
          <div className="form-label">What´s your name?</div>
          <input type="text" />
        </div>
        <div className="form-section">
          <div className="form-label">Your fancy email</div>
          <input type="email" />
        </div>
        <div className="form-section">
          <div className="form-label send-mail">
            Tell me about your project
            <i className="fas fa-paperclip"></i>
            <i className="fas fa-arrow-right"></i>
          </div>
          <textarea id="styled" rows="1" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
