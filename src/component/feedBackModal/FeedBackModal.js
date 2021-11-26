import React, { useState } from "react";
import ReactDom from "react-dom";
import { addReview } from "../../redux/menuDetails/menuDetailsAction";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RatingModal from "../ratingModal/RatingModal";
import "./FeedBackModal.scss";

function FeedBackModal(props) {
  const { open, onClose } = props;

  if (!open) return null;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    FoodQuality: "",
    MenuVariety: "",
    Service: "",
    Atmosphere: "",
    message: "",
    rating: 0,
    date: new Date().toISOString(),
  });

  const handleChange = (event) => {
    setData((previousData) => {
      return { ...previousData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addReview(data));
    onClose();
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-container">
        <h6>FeedBack</h6>
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col md>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="text"
                  value={data.name}
                  placeholder="Name"
                  required
                />
              </Col>
              <Col md>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  type="email"
                  value={data.email}
                  placeholder="Email"
                  required
                />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control
                onChange={handleChange}
                name="phone"
                type="phone"
                value={data.phone}
                placeholder="Phone"
                required
              />
            </Form.Group>
            <Form.Group>
              <div
                className="mb-3"
                onChange={handleChange}
                checked={data.FoodQuality}
              >
                <p>FoodQuality</p>
                <div className="radio">
                  <Form.Check
                    inline
                    label="Satisfied"
                    name="FoodQuality"
                    type="radio"
                    value="Satisfied"
                    id="inline-radio-1"
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Average"
                    name="FoodQuality"
                    type="radio"
                    value="Average"
                    id="inline-radio-2"
                  />
                  <Form.Check
                    inline
                    label="Not Satisfied"
                    name="FoodQuality"
                    type="radio"
                    value="Not Satisfied"
                    id="inline-radio-3"
                  />
                </div>
              </div>
              <div
                className="mb-3"
                onChange={handleChange}
                checked={data.MenuVariety}
              >
                <p>MenuVariety</p>
                <div className="radio">
                  <Form.Check
                    inline
                    label="Satisfied"
                    name="MenuVariety"
                    type="radio"
                    value="Satisfied"
                    id="inline-radio-4"
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Average"
                    name="MenuVariety"
                    type="radio"
                    value="Average"
                    id="inline-radio-5"
                  />
                  <Form.Check
                    inline
                    label="Not Satisfied"
                    name="MenuVariety"
                    type="radio"
                    value="Not Satisfied"
                    id="inline-radio-6"
                  />
                </div>
              </div>
              <div
                className="mb-3"
                onChange={handleChange}
                checked={data.Service}
              >
                <p>Service</p>
                <div className="radio">
                  <Form.Check
                    inline
                    label="Satisfied"
                    name="Service"
                    type="radio"
                    value="Satisfied"
                    id="inline-radio-7"
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Average"
                    name="Service"
                    type="radio"
                    value="Average"
                    id="inline-radio-8"
                  />
                  <Form.Check
                    inline
                    label="Not Satisfied"
                    name="Service"
                    type="radio"
                    value="Not Satisfied"
                    id="inline-radio-9"
                  />
                </div>
              </div>
              <div
                className="mb-3"
                onChange={handleChange}
                checked={data.Atmosphere}
              >
                <p>Atmosphere</p>
                <div className="radio">
                  <Form.Check
                    inline
                    label="Satisfied"
                    name="Atmosphere"
                    type="radio"
                    value="Satisfied"
                    id="inline-radio-10"
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Average"
                    name="Atmosphere"
                    type="radio"
                    value="Average"
                    id="inline-radio-11"
                  />
                  <Form.Check
                    inline
                    label="Not Satisfied"
                    name="Atmosphere"
                    type="radio"
                    value="Not Satisfied"
                    id="inline-radio-12"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                onChange={handleChange}
                as="textarea"
                rows={3}
                name="message"
                value={data.message}
                placeholder="Message"
                required
              />
            </Form.Group>
            <div className="buttons">
              <Button onClick={() => setIsOpen(true)} variant="primary">
                Next
              </Button>
              <Button onClick={onClose} variant="primary">
                Close
              </Button>
            </div>
          </Form>
        </div>
        <RatingModal
          open={isOpen}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default FeedBackModal;
