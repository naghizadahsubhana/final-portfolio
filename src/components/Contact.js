import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_uq1p9em",
        e.target,
        "user_Jk5meWzztrCniJwIYUPyD"
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
    <div className="contact-header">
      <div className="contact">
        <h2>Contact Form</h2>
        <h5>---Get In Touch---</h5>
      </div>
      <div className=" container ">
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            required="Please enter your name!"
           
          />{" "}
          <br />
          <label htmlFor="email">Email:</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            required="Please enter your email!"
           
          />{" "}
          <br />
          <label htmlFor="password">Password:</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            required="Please enter your password!"
            
          />{" "}
          <br />
          <label htmlFor="telephone">Telephone:</label> <br />
          <input
            type="telephone"
            id="telephone"
            name="telephone"
            required="Please enter your telephone!"
           
          />{" "}
          <br />
          <label htmlFor="message">Message:</label> <br />
          <textarea
            type="message"
            id="message"
            name="message"
            required="Please enter your message!"
          
            rows="4"
            cols="40"
          ></textarea>{" "}
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="top-bar">
        <a href="https://instagram.com/e.s_zade?igshid=50o4vf6a2t3s">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/feed/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/naghizadahsubhana?tab=repositories">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <div className="bottom-bar">
        <p>&copy;Copyright Website 2020 | All rights Resereved.</p>
      </div>
    </div>
  );
};

export default Contact;
