import React from "react";
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm
} from "@devexpress/dx-react-scheduler-material-ui";


const Schedule = () => {
  const appointment = [{ title: "Test Task", startDate: "2023-12-25T11:00" , endDate: "2023-12-25T12:00"}]
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
      <Paper style={{ width: "80%", height: "max-content" }}>
      <Scheduler data={appointment}>
        <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
        <Appointments />
        <AppointmentTooltip
            showCloseButton
          />

      </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
