//Contact.jsx
//Kristopher Prince 301462555
//September 19th 2025

import React, { useState } from "react";
import "../App.css";

//Form Information Set Up
function Contact() {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
  });

  //Handling Form Input
  const userInput = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  //Handling Form Submit
  const userSubmit = (e) => {
    e.preventDefault();

    //Check the submitting works
    console.log("Submitted:", formInfo);

    //Reset the info after submit
    setFormInfo({
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="flex-container">
        {/* My Contact Information */}
        <div className="flex-item">
          <h2>Contact Info</h2>
          <p>Name: Kristopher Joshua Prince</p>
          <p>Email: kristopher.prince.27@gmail.com</p>
          <p>Number: (437) - 477 - 2813</p>
        </div>

        {/* User Contact Form */}
        <div className="flex-item">
          <h2>Have a Query?</h2>
          <form onSubmit={userSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={formInfo.firstName} onChange={userInput} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formInfo.lastName} onChange={userInput} required />
            <input type="text" name="number" placeholder="Phone Number" value={formInfo.number} onChange={userInput} required />
            <input type="email" name="email" placeholder="Email" value={formInfo.email} onChange={userInput} required />
            <textarea name="message" placeholder="..." rows="5" value={formInfo.message} onChange={userInput} required ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

