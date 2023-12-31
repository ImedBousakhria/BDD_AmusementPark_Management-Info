import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'
import AttractionBars from './components/charts/AttractionBars'
import VisitsDonut from './components/charts/VisitsDonut'
import StatBoard from './components/StatBoard'

const Dashboard = () => {
  return (
    <div className=' bg-darkBG flex h-max justify-center'>
        { /* Parent wrapper */ }
        <div className='flex flex-col basis-[50%]'>
        { /* First column, to the right */ }
            <AttendanceBars />
            <AttractionBars />
            <VisitsDonut />
        </div>

        <div className='flex flex-col basis-[50%]'>
        { /* Second column, to the left */ }
        <StatBoard />
        </div>
    </div>
  )
}

export default Dashboard