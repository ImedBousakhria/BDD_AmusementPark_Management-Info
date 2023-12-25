import React, { useState } from "react";
import { SketchPicker , CirclePicker } from "react-color";

import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const [state, setState] = useState(appointments)
  const appointments = [
    {
      id: 1,
      title: "Test Task",
      startDate: "2023-12-25T11:00",
      endDate: "2023-12-25T12:00",
    },
  ];
  const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#FFC107",
        borderRadius: "8px",
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const [selectedColor, setSelectedColor] = useState('#ff0000'); // Initial color

  const handleChange = (color) => {
    console.log(color , color.hex)
    setSelectedColor(color)
  }

  return (
    <div>
      <SketchPicker color={selectedColor} onChange={handleChange} />
      <CirclePicker/>
      <Paper style={{ width: "80%", height: "max-content" }}>
        <Scheduler data={appointment}>
          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <Appointments />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
