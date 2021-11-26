import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.scss";

function ContactForm(props) {
  const { handleChange, handleSubmit, name, email, phone, message } = props;

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h4>Get In Touch</h4>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            value={name}
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            onChange={handleChange}
            name="phone"
            type="phone"
            value={phone}
            placeholder="Phone"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows={3}
            name="message"
            value={message}
            placeholder="Message"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
