import React from 'react'
import { ResponsiveBar } from "@nivo/bar";



const allData = [
  { rank :"1ST", name: "Thrill Seeker Express", value: 20 },
  { rank :"2ND", name: "Thrill Seeker Express", value: 40 },
  { rank :"3RD", name: "Thrill Seeker Express", value: 34 },
  { rank :"4TH", name: "Thrill Seeker Express", value: 78 },
  { rank :"5TH", name: "Thrill Seeker Express", value: 89 },
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