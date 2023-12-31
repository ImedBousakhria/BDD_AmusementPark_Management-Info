import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'
import AttractionBars from './components/charts/AttractionBars'

const Dashboard = () => {
  return (
    <div className=' bg-darkBG flex '>
        { /* Parent wrapper */ }
        <div className='flex flex-col'>
        { /* First clumn */ }
            <AttendanceBars />
            <AttractionBars />
        </div>
    </div>
  )
}

export default Dashboard