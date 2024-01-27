import { Rating } from "@mui/material";
import React, { useState } from "react";

const Reviews = ({ game, comments, setCurrentComments }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleFeedbackSubmit = (feedback) => {
    setCurrentComments((prevComments) => [...prevComments, feedback]);
    // You can handle saving the feedback to backend or wherever it's needed
    setShowFeedbackModal(false); // Close the modal after submitting feedback
  };

  return (
    <div className="p-4 flex flex-col gap-3 ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <button
          onClick={() => setShowFeedbackModal(true)}
          className="bg-creamBlue text-white px-4 py-2 rounded-md hover:opacity-80"
        >
          Give Feedback
        </button>
      </div>

      <span className="flex items-center gap-3">
        <h2 className=" text-2xl text-gray-500">{game?.rating}</h2>
        <Rating
          className=" "
          name="simple-controlled"
          value={game?.rating}
          readOnly
        />
      </span>

      {/* comments: create a component later */}

      <ul className="flex flex-col gap-3">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} index={index} />
        ))}
      </ul>

      {showFeedbackModal && (
        <GiveFeedBack
          onSubmit={handleFeedbackSubmit}
          onClose={() => setShowFeedbackModal(false)}
        />
      )}
    </div>
  );
};

export default Reviews;

const GiveFeedBack = ({ onSubmit, onClose }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (feedback.trim() === "" || rating === 0) {
      // Handle validation or display an error message
      return;
    }
    onSubmit({ text: feedback, rating }); // Pass feedback and rating to parent component
    setFeedback(""); // Clear feedback input after submission
    setRating(0); // Reset rating after submission
    onClose(); // Close the modal after submitting feedback
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-lg font-semibold mb-4">Give Feedback</h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback..."
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <div className="flex justify-between items-center gap-2 mb-2">
          <span>Your Rating:</span>
          <Rating
            name="feedback-rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-creamBlue text-white px-4 py-2 rounded-md hover:opacity-80 mr-2"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 px-4 py-2 rounded-md hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

function Comment({ comment, index }) {
  return (
    <div>
      <li
        key={index}
        className=" flex flex-col gap-4 bg-gray-100 p-3 rounded-md"
      >
        <div className="flex gap-3 items-center">
          <strong>{comment.user || "Imed"}:</strong>
          <Rating
            className=" "
            name="simple-controlled"
            value={comment?.rating}
            readOnly
          />
        </div>
        {comment.text}
      </li>
    </div>
  );
}

