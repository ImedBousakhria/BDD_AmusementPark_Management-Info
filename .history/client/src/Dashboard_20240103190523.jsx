import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'
import AttractionBars from './components/charts/AttractionBars'
import VisitsDonut from './components/charts/VisitsDonut'
import StatBoard from './components/StatBoard'
import StaffList from './components/StaffList'
import TeamCard from './components/TeamCard'

const Dashboard = () => {
  return (
    <div className=' bg-darkBG flex h-screen w-full justify-center'>
        { /* Parent wrapper */ }
        <div className='flex flex-col basis-[50%]'>
        { /* First column, to the right */ }
            <AttendanceBars />
            <AttractionBars />
            <VisitsDonut />
        </div>

        <div className='flex flex-col items-center basis-[50%]'>
        { /* Second column, to the left */ }
        <StatBoard />
        <StaffList />
        <TeamCard />
        </div>
    </div>
  )
}

export default Dashboard