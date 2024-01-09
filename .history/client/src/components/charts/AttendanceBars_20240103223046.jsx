import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

const AttendanceBars = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleBarClick = (bar, event) => {
    setActiveIndex(bar.index == activeIndex ? null : bar.index);
  };
  const allData = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 40 },
    { day: "Wed", value: 34 },
    { day: "Thu", value: 78 },
    { day: "Fri", value: 89 },
    { day: "Sat", value: 25 },
    { day: "Sun", value: 16 },
  ];

  return (
    <div
      className="py-5 pl-2 pb-16 bg-white border border- border-dashed border-black rounded-lg"
      style={{ width: "100%", height: "340px" }}
    >
      {" "}
      <h2 className="text-xl font-bold mb-4">Daily Attendance</h2>
      <ResponsiveBar
        padding={0.8}
        data={allData}
        keys={["value"]}
        indexBy="day"
        margin={{ top: 10, right: 10, bottom: 60, left: 30 }}
        colors={(bar) => (bar.index === activeIndex ? "#F1B7C1" : "#F1B7C180")}
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
        borderRadius={6} // Set the bar corner roundness
      />
    </div>
  );
};

export default AttendanceBars;
