import React, { useState } from "react";
import { CirclePicker } from "react-color";
import moment from "moment/moment";

import {
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  AllDayPanel,
  DragDropProvider,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const appointments = [
    {
      id: 1,
      title: "Test Task",
      startDate: "2024-01-03T11:00Z",
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
  const [selectedColor, setSelectedColor] = useState("#C3C2FF"); // Initial color

  const commitChanges = ({ added, changed, deleted }) => {
    setState((prevState) => {
      let data = prevState;
      let appointmentColor = selectedColor.hex || selectedColor;

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
      setSelectedColor(color);
      onFieldChange({ color: selectedColor });
    };

    return (
      <AppointmentForm.BasicLayout {...props}>
        <TextField
          label="Title"
          value={appointmentData?.title}
          onChange={(e) => onFieldChange({ title: e.target.value })}
        />
        <CirclePicker
          color={selectedColor}
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

  // so important : basic is for the default form, command is for command, reccurence is only a thing once isReccurent = True
  const FormLayout = (props) => {
    const { basicLayoutComponent, commandLayoutComponent } = props;
    return (
      <AppointmentForm.Layout {...props}>
        <div onClick={() => console.log(props)}>here Click</div>
      </AppointmentForm.Layout>
    );
  };

  // Actually not needed for now : it only adds some fields in footer
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

  /*  Later, Last thing */
  const CustomTooltip = ({ appointmentData }) => {
    const { title, startDate, endDate } = appointmentData;

    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div onClick={() => console.log(appointmentData)}>
          Task: {appointmentData.title}
        </div>
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
    <div className=" flex items-center justify-center py-6 h-screen bg-darkBG">
      <Paper style={{ width: "90%", height: 600 }}>
        <Scheduler data={appointments}>
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />
          <ConfirmationDialog />
          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <AllDayPanel />
          <Appointments appointmentComponent={Appointment} />
          <DragDropProvider />

          <AppointmentTooltip
            /*contentComponent={CustomTooltip}*/
            showCloseButton
            showOpenButton
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
