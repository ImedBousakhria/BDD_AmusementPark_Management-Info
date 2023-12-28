import React from 'react'
import { ResponsiveBar } from "@nivo/bar";



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