import React from "react";

const Reviews = () => {
  return (
    <div className="p-4 flex flex-col ">
      <div className=" flex justify-between">
        Reviews
        <GiveFeedBack />
      </div>

    

    </div>
  );
};

export default Reviews;

function GiveFeedBack() {
  return <div className=""> Give Feedback</div>;
}
