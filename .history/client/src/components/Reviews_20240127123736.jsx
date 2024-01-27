import { Rating } from "@mui/material";
import React from "react";

const Reviews = ({ game, comments }) => {
  return (
    <div className="p-4 flex flex-col gap-3 ">
      <div className=" flex justify-between">
        Reviews
        <GiveFeedBack />
      </div>

      <span className="flex items-center gap-3">
        <h2 className=" text-2xl text-gray-500">{game?.rating}</h2>
        <Rating
          className=" "
          name="simple-controlled"
          value={game?.rating}
          readOnly
        />{" "}
      </span>

      {/*  comments : create a component later */}

      <ul className="flex flex-col gap-3">
        {comments.map((comment, index) => (
          <Comment comment={comment}  index={index}/>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

const GiveFeedBack = ({ onSubmit }) => {
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
  };

  return (
    <div className="">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback..."
        className="w-full p-2 border border-gray-300 rounded-md mb-2"
      />
      <div className="flex items-center gap-2 mb-2">
        <span>Your Rating:</span>
        <Rating
          name="feedback-rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-creamBlue text-white px-4 py-2 rounded-md hover:opacity-80"
      >
        Submit Feedback
      </button>
    </div>
  );
};

function Comment({comment, index}) {

  return (
    <div>
      <li key={index} className=" bg-gray-100 p-3 rounded-md">
            <strong>{comment.user}:</strong> {comment.text}
          </li>
    </div>
  )

}