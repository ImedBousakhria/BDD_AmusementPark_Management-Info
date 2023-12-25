import React from "react";
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  return (
    <div>
      <Paper
      <Scheduler>
        <WeekView startDayHour={9} endDayHour={19} />
      </Scheduler>
    </div>
  );
};

export default Schedule;
