import React from "react";
import { ResponsivePie } from "@nivo/pie";

const colors = ["#BBB4D7", "#66D1F3", "#F1B7C1"];
const data = [
  { id: "Zone A", value: 35 },
  { id: "Zone B", value: 45 },
  { id: "Zone C", value: 25 },
];

const VisitsDonut = () => {
  return (
    <div
      className="py-5 pl-2 pb-16 bg-white border border- border-dashed border-black rounded-lg"
      style={{ width: "100%", height: "340px" }}
    >
      <h2 className="text-xl font-bold mb-4">Visits per Zone</h2>

      <ResponsivePie
        enableArcLabels={false}
        data={data}
        margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
        innerRadius={0.7}
        padAngle={2}
        colors={colors}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={15}
        radialLabelsTextColor="#333"
        radialLabelsLinkOffset={0}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333"
        activeInnerRadiusOffset={5}
        activeOuterRadiusOffset={8}
        cornerRadius={3}
        /* legends={[
          {
            anchor: "top",
            direction: "row",
            translateY: 0,
            itemWidth: 80,
            itemHeight: 18,
            itemsSpacing: 9,
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]} */
        animate
      />
    </div>
  );
};

export default VisitsDonut;
