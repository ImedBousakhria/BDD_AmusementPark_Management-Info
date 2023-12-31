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
      <Paper style={{ width: "80%", height: 500 }}>
      <Scheduler>
        <WeekView startDayHour={9} endDayHour={19} />
        <Appointments />
      </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
