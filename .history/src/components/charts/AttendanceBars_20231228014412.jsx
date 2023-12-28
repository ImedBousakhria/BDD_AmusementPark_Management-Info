import React, {useState} from 'react'
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

  return (
    <div className='p-8 pb-20 bg-white border border- border-dashed border-black rounded-lg text-white'>AttendanceBars</div>
  )
}

export default AttendanceBars