import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'
import AttractionBars from './components/charts/AttractionBars'
import VisitsDonut from './components/charts/VisitsDonut'

const Dashboard = () => {
  return (
    <div className=' bg-darkBG flex h-screen text-white '>
        { /* Parent wrapper */ }
        <div className='flex flex-col'>
        { /* First column, to the right */ }
            <AttendanceBars />
            <AttractionBars />
            <VisitsDonut />
        </div>

        <div className='flex flex-'>
        { /* Second column, to the left */ }


        </div>
    </div>
  )
}

export default Dashboard