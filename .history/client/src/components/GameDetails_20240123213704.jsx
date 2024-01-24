import React from 'react'
const Details = ({ game, userType }) => {
    const [value, setValue] = useState(game.rating);
    const { title, ageRating, status } = game;
  
    let statusColorClass = "";
  
    switch (status) {
      case "Open":
        statusColorClass = "text-green-600";
        break;
      case "Closed":
        statusColorClass = "text-red-600";
        break;
      case "Under Maintenance":
        statusColorClass = "text-orange-600";
        break;
      default:
        statusColorClass = "";
    }
  
    return (
      <div className="flex flex-col p-3">
        <h3 className="overflow-hidden font-semibold">{title}</h3>
        <Rating
        className=" "
          name="simple-controlled"
          value={value}
          readOnly={userType}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <small className="text-gray-400 mt-4">Attraction</small>
        <small className="text-gray-500">{ageRating}</small>
        <p className={` ${statusColorClass} font-semibold`}>{status}</p>
      </div>
    );
  };
  

export default GameDetails