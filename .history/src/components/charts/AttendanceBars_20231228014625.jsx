import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

const allData = [
  { day: "Monday", value: 20 },
  { day: "Tuesday", value: 40 },
  { day: "Wednesday", value: 34 },
  { day: "Thursday", value: 78 },
  { day: "Friday", value: 89 },
  { day: "Saturday", value: 25 },
  { day: "Sunday", value: 16 },
];

const AttendanceBars = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleBarClick = (bar, event) => {
    setActiveIndex(bar.index);
  };

  return (
    <div className="p-5 bg-white border border- border-dashed border-black rounded-lg">
      {" "}
      <h2 className="font-bold mb-4">Daily Attendance</h2>
      <ResponsiveBar
        padding={0.6}
        data={allData}
        keys={["value"]}
        indexBy="day"
        margin={{ top: 10, right: 10, bottom: 50, left: 60 }}
        colors={(bar) => (bar.index === activeIndex ? "#1877F2" : "#1877F280")}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Day",
          legendPosition: "middle",
          legendOffset: 45,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Value",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        layers={[
          "grid",
          "axes",
          "bars",
          "markers",
          "legends",
          (barLayer) => (
            <rect
              key="rounded-corners"
              x={barLayer.x}
              y={barLayer.y}
              width={barLayer.width}
              height={barLayer.height}
              rx={10} // Adjust corner roundness here
              ry={10}
              fill="none"
              strokeWidth={2}
              style={{ cursor: "pointer" }}
            />
          ),
        ]}
        enableLabel={false}
        onClick={handleBarClick}
        borderRadius={10} // Set the bar corner roundness
      />
    </div>
  );
};

export default AttendanceBars;
