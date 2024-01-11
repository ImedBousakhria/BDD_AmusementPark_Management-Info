import React from "react";
import bna

const StaffMember = ({ element }) => {
  return (
    <div className="flex justify-between py-2 my-1 bg-gray-100">
      <div className="flex gap-3">
        <div>img</div>
        <div>
          {element.firstName} {element.lastName}
        </div>
      </div>

      <div>profile</div>
    </div>
  );
};

export default StaffMember;
