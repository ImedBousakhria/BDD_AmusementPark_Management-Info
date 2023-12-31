import React from "react";

const StaffMember = ({ element }) => {
  return (
    <div className="flex just">
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
