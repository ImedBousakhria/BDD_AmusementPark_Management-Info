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

