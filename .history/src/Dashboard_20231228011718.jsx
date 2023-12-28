import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'
import AttractionBars from './components/charts/AttractionBars'
import VisitsDonut from './components/charts/VisitsDonut'

const Dashboard = () => {
  return (
    <div className=' bg-darkBG flex '>
        { /* Parent wrapper */ }
        <div className='flex flex-col'>
        { /* First clumn */ }
            <AttendanceBars />
            <AttractionBars />
            <VisitsDonut />
        </div>
    </div>
  )
}

export default Dashboard