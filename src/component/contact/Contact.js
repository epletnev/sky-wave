import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getContact,
  getEnquiry,
  addEnquiry,
} from "../../redux/contact/contactAction";
import { IoMdHome } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import ContactForm from "./ContactForm";
import "./Contact.scss";

function ContactUs() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.contact.contact);

  useEffect(() => {
    dispatch(getContact());
    dispatch(getEnquiry());
  }, []);

  const handleChange = (event) => {
    setData((previousData) => {
      return { ...previousData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEnquiry(data));
    clearInput();
    alert("Successfully submitted");
  };

  const clearInput = () => {
    setData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="about-container">
      <section className="contacts">
        <div>
          <IoMdHome className="icons" />
          <h6>ADDRESS:</h6>
          <p>{contactData.address}</p>
        </div>
        <div>
          <MdPhone className="icons" />
          <h6>PHONES:</h6>
          {contactData.phone ? (
            contactData.phone.map((phone) => <p key={phone}>{phone}</p>)
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div>
          <IoMdMail className="icons" />
          <h6>E-MAIL:</h6>
          <p>{contactData.email}</p>
        </div>
      </section>
      <section className="form">
        <ContactForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          name={data.name}
          email={data.email}
          phone={data.phone}
          message={data.message}
        />
        <img src="assets/images/others/about-1.jpg" alt="Contact us image" />
      </section>
    </div>
  );
}

export default ContactUs;
