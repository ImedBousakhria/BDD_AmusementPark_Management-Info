import React from 'react'
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const Schedule = () => {
  return (
    <div><Scheduler ><WeekView startDayHour={9} endDayHour={19}/></Scheduler>
    </div>
  )
}

export default Schedule