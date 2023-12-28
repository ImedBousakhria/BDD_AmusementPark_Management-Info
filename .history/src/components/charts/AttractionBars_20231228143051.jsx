import React from 'react'
import { ResponsiveBar } from "@nivo/bar";



const allData = [
  { "1ST", value: 20 },
  { "2ND", value: 40 },
  { "3RD", value: 34 },
  { "4TH", value: 78 },
  { "5TH", value: 89 },
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