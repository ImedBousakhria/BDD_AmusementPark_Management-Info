import { Rating } from "@mui/material";
import React, { useState } from "react";
import GiveFeedBack from "./GiveFeedBack";

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



function Comment({ comment, index }) {
  return (
    <div>
      <li
        key={index}
        className=" flex flex-col gap-4 bg-gray-100 p-3 rounded-md"
      >
        <div className="flex justify-between gap-3 items-center">
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

