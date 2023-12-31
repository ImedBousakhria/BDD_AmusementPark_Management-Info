import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'

const Dashboard = () => {
  return (
    <div className=' bg-darkBG flex '>
        { /* Parent wrapper */ }
        <div className='flex flex-col'>
        { /* First clumn */ }
            <AttendanceBars />
            <Attr
        </div>
    </div>
  )
}

export default Dashboard