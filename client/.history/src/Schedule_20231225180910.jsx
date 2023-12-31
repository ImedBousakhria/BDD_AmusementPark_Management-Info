import React, { useState } from "react";
import { SketchPicker, CirclePicker } from "react-color";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const appointments = [
    {
      id: 1,
      title: "Test Task",
      startDate: "2023-12-25T11:00",
      endDate: "2023-12-25T12:00",
    },
  ];
  const [state, setState] = useState(appointments);

  const commitChanges = ({ added, changed, deleted }) => {
    setState((prevState) => {
      let  data  = prevState;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  };

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

  const [selectedColor, setSelectedColor] = useState("#ff0000"); // Initial color
  const handleChange = (color) => {
    console.log(color, color.hex);
    setSelectedColor(color);
  };

  return (
    <div>
      <h2 onClick={() => console.log(appointments)}>
        Click here to display data in console
      </h2>
      <SketchPicker color={selectedColor} onChange={handleChange} />
      <CirclePicker />
      <Paper style={{ width: "80%", height: "max-content" }}>
        <Scheduler data={state}>
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />

          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <ConfirmationDialog />

          <Appointments />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
