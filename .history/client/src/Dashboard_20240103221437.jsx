import React from 'react'
import AttendanceBars from './components/charts/AttendanceBars'
import AttractionBars from './components/charts/AttractionBars'
import VisitsDonut from './components/charts/VisitsDonut'
import StatBoard from './components/StatBoard'
import StaffList from './components/StaffList'
import TeamCard from './components/TeamCard'

const Dashboard = () => {
  return (
    <div className='h-screen p-6  flex justify-center'>
        { /* Parent wrapper */ }
        <div className='flex flex-col gap-[4rem] basis-[50%]'>
        { /* First column, to the right */ }
            <AttendanceBars />
            
        </div>

        <div className='flex flex-col gap-[3rem] items-center basis-[50%]'>
        { /* Second column, to the left */ }
        <StatBoard />
        <StaffList />
        <TeamCard />
        </div>
    </div>
  )
}

export default Dashboard