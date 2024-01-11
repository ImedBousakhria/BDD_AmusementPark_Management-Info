import React from 'react'

const ZoneLabel = ({ number }) => {
    return (
      <strong className=" bg-slate p-4 rounded-xl cursor-pointer   ">
        zone {number}
      </strong>
    );
  };

export default ZoneLabel