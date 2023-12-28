import React from 'react'
import { ResponsiveBar } from "@nivo/bar";



const allData = [
  { "1ST": "Mon", value: 20 },
  { "2ND": "Tue", value: 40 },
  { "3RD": "Wed", value: 34 },
  { "4TH": "Thu", value: 78 },
  { "5TH": "Fri", value: 89 },
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