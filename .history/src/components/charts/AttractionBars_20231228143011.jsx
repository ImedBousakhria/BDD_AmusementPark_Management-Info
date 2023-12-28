import React from 'react'
import { ResponsiveBar } from "@nivo/bar";



const allData = [
  { "1ST": "Mon", value: 20 },
  { "2ND": "Tue", value: 40 },
  { "3RD": "Wed", value: 34 },
  { "4TH": "Thu", value: 78 },
  { day: "Fri", value: 89 },
  { day: "Sat", value: 25 },
  { day: "Sun", value: 16 },
];

const AttractionBars = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleBarClick = (bar, event) => {
    setActiveIndex(bar.index);
  };

  return (
    <div>AttractionBars</div>
  )
}

export default AttractionBars