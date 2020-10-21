import React from "react";
import emailjs from "emailjs-com";
import "./style/contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "first_template",
        e.target,
        "user_sz4hfUdyeYVh5j2olKNjN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact-container" id="contact-container">
      <div className="contact-info leftReveal">
        <div className="contact-title">
          <p>- Contact </p>
          Got a project?
          <br></br>
          Let´s talk.
        </div>
        <div className="contact-description">
          My inbox is always open. Whether you have a question, project or just
          want to say hi, I'll try my best to get back to you!
          <p>daniel@gtdan.com</p>
        </div>
      </div>
      <div className="contact-form rightReveal">
        <form onSubmit={sendEmail}>
          <div className="form-section">
            <div className="form-label">What´s your name?</div>
            <input type="text" name="name" />
          </div>
          <div className="form-section">
            <div className="form-label">Your fancy email</div>
            <input type="email" name="email" />
          </div>
          <div className="form-section">
            <div className="form-label send-mail">
              Tell me about your project
              {/* <button>
                <i className="fas fa-paperclip"></i>
              </button> */}
              <button type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <textarea id="styled" rows="1" name="message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
