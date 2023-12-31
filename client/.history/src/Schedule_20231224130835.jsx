import React from "react";
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const appointment = [{ title: ""}]
  const Appointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#FFC107',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  return (
    <div>
      <Paper style={{ width: "80%", height: 500 }}>
      <Scheduler data={appointment}>
        <WeekView startDayHour={9} endDayHour={19} />
        <Appointments />
      </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
