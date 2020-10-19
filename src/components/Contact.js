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
          My inbox is always open. Whether you have a question, project or just
          want to say hi, I'll try my best to get back to you!
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
