import { Rating } from "@mui/material";
import React from "react";

const Reviews = ({ game, comments }) => {
  return (
    <div className="p-4 flex flex-col ">
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

      
    </div>
  );
};

export default Reviews;

function GiveFeedBack() {
  return <div className=""> Give Feedback</div>;
}


function Comment() {

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.user}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  )

}