import React, { useState, useRef } from "react";
import { CirclePicker } from "react-color";
import moment from "moment/moment";

import {
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

import {
  TextField,
  Paper,
} from "@mui/material";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  AllDayPanel,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import SideBar from "./components/super/SideBar";

const Schedule = () => {
  const appointments = [
    {
      id: 1,
      title: "Test Task",
      startDate: "2024-01-08T11:00Z",
      endDate: "2024-01-03T15:30Z",
      color: "#C3C2FF",
    },
    {
      id: 5,
      title: "Test Task",
      startDate: "2024-01-02T09:00Z",
      endDate: "2024-01-02T10:30Z",
      color: "#C3C2FF",
    },
    {
      id: 2,
      title: "Test Task",
      startDate: "2024-01-03T13:00Z",
      endDate: "2024-01-03T16:30Z",
      color: "#66D1F3",
    },
    {
      id: 3,
      title: "Test Task",
      startDate: "2024-01-04T11:00Z",
      endDate: "2024-01-04T16:00Z",
      color: "#FBCB77",
    },
    {
      id: 10,
      title: "Test Task",
      startDate: "2024-01-04T11:00Z",
      endDate: "2024-01-04T16:00Z",
      color: "#FBCB77",
    },
    {
      id: 9,
      title: "Test Task",
      startDate: "2024-01-04T11:00Z",
      endDate: "2024-01-04T16:00Z",
      color: "#FBCB77",
    },
    {
      id: 4,
      title: "Test Task",
      startDate: "2024-01-05T09:00Z",
      endDate: "2024-01-05T12:30Z",
      color: "#F1B7C1",
    },
    {
      id: 6,
      title: "Test Task",
      startDate: "2024-01-03T09:00Z",
      endDate: "2024-01-03T12:30Z",
      color: "#66D1F3",
    },
  ];

  const [state, setState] = useState(appointments);
  const selectedColorRef = useRef("#C3C2FF"); // Initial color

  const commitChanges = ({ added, changed, deleted }) => {
    setState((prevState) => {
      let data = prevState;
      let appointmentColor = selectedColorRef.current;

      if (added) {
        added.color = appointmentColor;
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? {
                ...appointment,
                ...changed[appointment.id],
                color: appointmentColor,
              }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return data;
    });
  };

  const colors = ["#C3C2FF", "#66D1F3", "#F1B7C1", "#FBCB77"];

  const FormBasicLayout = (props) => {
    const { onFieldChange, appointmentData } = props;
    const handleChange = (color) => {
      selectedColorRef.current = color.hex;
      onFieldChange({ color: color.hex });
    };

    return (
      <AppointmentForm.BasicLayout {...props}>
        <TextField
          label="Title"
          value={appointmentData?.title}
          onChange={(e) => onFieldChange({ title: e.target.value })}
        />
        <CirclePicker
          color={selectedColorRef.current}
          onChange={handleChange}
          circleSize={24}
          colors={colors}
        />
        <div onClick={() => console.log(props, appointmentData)}>
          here Click
        </div>
      </AppointmentForm.BasicLayout>
    );
  };

  const FormLayout = (props) => {
    const { basicLayoutComponent, commandLayoutComponent } = props;
    return (
      <AppointmentForm.Layout {...props}>
        <div onClick={() => console.log(props)}>here Click</div>
      </AppointmentForm.Layout>
    );
  };

  const FormOverlay = (props) => {
    const { children, onHide, visible, target } = props;

    return (
      <AppointmentForm.Overlay
        onHide={onHide}
        visible={visible}
        target={target}
        children={children}
      >
        {children}
      </AppointmentForm.Overlay>
    );
  };

  const Appointment = ({ children, style, data, ...restProps }) => {
    return (
      <div onClick={() => console.log(data)}>
        <Appointments.Appointment
          {...restProps}
          style={{
            ...style,
            backgroundColor: data.color + "70",
            borderRadius: "8px",
            border: "1.5px solid " + data.color,
            color: "#fff",
          }}
        >
          {children}
        </Appointments.Appointment>
      </div>
    );
  };

  const CustomTooltip = ({ appointmentData, ...restProps }) => {
    const { title } = appointmentData;

    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <div style={{ fontWeight: "bold" }}>Test Task</div>
        <div onClick={() => console.log()}>Time: {title}</div>
        <div
          style={{
            backgroundColor: "#C3C2FF",
            width: 10,
            height: 10,
            margin: 5,
          }}
        />
      </div>
    );
  };

  return (
    <div className="flex p-6 h-screen bg-darkBG">
      <Paper style={{ width: "90%", height: 600 }}>
        <Scheduler data={state}>
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />
          <ConfirmationDialog />
          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <AllDayPanel />
          <Appointments appointmentComponent={Appointment} />
          <DragDropProvider />

          <AppointmentTooltip
            showCloseButton
            showDeleteButton
            showOpenButton
            contentComponent={CustomTooltip}
          />

          <AppointmentForm
            overlayComponent={FormOverlay}
            basicLayoutComponent={FormBasicLayout}
            layoutComponent={FormLayout}
          />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
