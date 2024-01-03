import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

const allData = [
  { rank: "1ST", name: "Thrill Seeker Express", value: 20 },
  { rank: "2ND", name: "Thrill Seeker Express", value: 40 },
  { rank: "3RD", name: "Thrill Seeker Express", value: 34 },
  { rank: "4TH", name: "Thrill Seeker Express", value: 78 },
  { rank: "5TH", name: "Thrill Seeker Express", value: 89 },
];

const AttractionBars = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleBarClick = (bar, event) => {
    setActiveIndex(bar.index == activeIndex ? null : bar.index);
  };

  return (
    <div
      className="py-5 pl-2 pb-16 bg-white border border- border-dashed border-black rounded-lg"
      style={{ width: "100%", height: "20%" }}
    >
      <h2 className="text-xl font-bold mb-4">Most Popular Attractions</h2>
      <ResponsiveBar
        padding={0.3}
        data={allData}
        keys={["value"]}
        indexBy={(d) => `${d.rank} - ${d.name}`} // Combine Rank and name for indexing
        margin={{ top: 10, right: 50, bottom: 60, left: 150 }}
        colors={(bar) => (bar.index === activeIndex ? "#BBB4D7" : "#BBB4D780")}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
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
        layout="horizontal"
        label={({ index }) => (
          <g transform={`translate(${index * 45}, 10)`}>
            <text
              x={40}
              y={0}
              textAnchor="middle"
              dy={16}
              fontSize={12}
              fill="#333"
            >
              {allData[index].rank}
            </text>
            <text
              x={40}
              y={20}
              textAnchor="middle"
              dy={16}
              fontSize={12}
              fill="#333"
            >
              {allData[index].name}
            </text>
          </g>
        )}
      />
    </div>
  );
};

export default AttractionBars;
