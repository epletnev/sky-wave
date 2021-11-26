import React from "react";
import Header from "../../component/header/Header";
import ContactUs from "../../component/contact/Contact";
import "./Contact.scss";

function Contact() {
  return (
    <div className="App">
      <Header
        backgroundImage="assets/images/others/contact.jpg"
        title="Contact Us"
        description="GOT A QUESTION? WE'LL GIVE YOU STRAIGHT ANSWER"
      />
      <ContactUs />
    </div>
  );
}

export default Contact;
