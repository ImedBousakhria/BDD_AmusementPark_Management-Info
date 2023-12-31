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
      <Paper style={{ width: "100%", height: 400 }}>
      <Scheduler>
        <WeekView startDayHour={9} endDayHour={19} />
      </Scheduler>
      <Paper></Paper>
    </div>
  );
};

export default Schedule;
