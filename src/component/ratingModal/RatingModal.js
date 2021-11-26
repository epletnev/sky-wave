import React from "react";
import Button from "react-bootstrap/Button";
import "./RatingModal.scss";

function RatingModal(props) {
  const { handleChange, handleSubmit, open } = props;

  if (!open) return null;

  return (
    <>
      <div className="rating-overlay" />
      <div className="rating-container">
        <h6>Ratings</h6>
        <div className="ratings">
          <p>Rating</p>
          <button onClick={handleChange} name="rating" value={1}>
            1
          </button>
          <button onClick={handleChange} name="rating" value={2}>
            2
          </button>
          <button onClick={handleChange} name="rating" value={3}>
            3
          </button>
          <button onClick={handleChange} name="rating" value={4}>
            4
          </button>
          <button onClick={handleChange} name="rating" value={5}>
            5
          </button>
        </div>
        <Button
          className="submit"
          onClick={handleSubmit}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default RatingModal;
