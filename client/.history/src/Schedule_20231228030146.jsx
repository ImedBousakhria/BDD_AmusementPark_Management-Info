import React, { useState } from "react";
import { CirclePicker } from "react-color";
import moment from 'moment-timezone';


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
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const colors = ["#C3C2FF", "#66D1F3", "#F1B7C1", "#FBCB77"];
  const [selectedColor, setSelectedColor] = useState("#C3C2FF"); // Initial color

  const appointments = [
    {
      id: 1,
      title: "Test Task",
      startDate: moment."2023-12-25T11:00", "America/New_York").toDate(),
      endDate: "2023-12-25T15:30",
      color: "#C3C2FF",
    },
    {
      id: 5,
      title: "Test Task",
      startDate: "2023-12-25T09:00",
      endDate: "2023-12-25T10:30",
      color: "#C3C2FF",
    },
    {
      id: 2,
      title: "Test Task",
      startDate: "2023-12-26T13:00",
      endDate: "2023-12-26T16:30",
      color: "#66D1F3",
    },
    {
      id: 3,
      title: "Test Task",
      startDate: "2023-12-28T11:00",
      endDate: "2023-12-28T16:00",
      color: "#FBCB77",
    },
    {
      id: 4,
      title: "Test Task",
      startDate: "2023-12-30T09:00",
      endDate: "2023-12-30T12:30",
      color: "#F1B7C1",
    },

    {
      id: 6,
      title: "Test Task",
      startDate: "2023-12-24T09:00",
      endDate: "2023-12-24T12:30",
      color: "#66D1F3",
    },
  ];
  const [state, setState] = useState(appointments);

  const commitChanges = ({ added, changed, deleted }) => {
    setState((prevState) => {
      let data = prevState;
      if (added) {
        added.color = selectedColor.hex || selectedColor;
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        let appointmentColor = selectedColor.hex || selectedColor;
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

  // so important : basic is for the default form, command is for command, reccurence is only a thing once isReccurent = True
  const FormLayout = (props) => {
    const { basicLayoutComponent, commandLayoutComponent } = props;
    return (
      <AppointmentForm.Layout
        {...props} /* basicLayoutComponent={() => {return null}} */
      ></AppointmentForm.Layout>
    );
  };

  const FormBasicLayout = (props) => {
    const { onFieldChange, appointmentData, children } = props;
    const handleChange = (color) => {
      setSelectedColor(color);
      onFieldChange({ color: selectedColor });
    };

    return (
      <AppointmentForm.BasicLayout {...props}>
        <AppointmentForm.Container {...props}>
          {children}
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
        </AppointmentForm.Container>
      </AppointmentForm.BasicLayout>
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
        <div className="border-t border-gray-200 flex flex-col gap-4 px-8 py-2.5 font-semibold">
          <h3>Pick a background color</h3>
        </div>
      </AppointmentForm.Overlay>
    );
  };

  const Appointment = ({ children, style, data, ...restProps }) => {
    return (
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
    );
  };

  /*  Later, Last thing */
  /*  const CustomTooltip = ({ appointmentData }) => {
    const { title, startDate, endDate } = appointmentData;

    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div>
          Time: {startDate} - {endDate}
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
 */

  return (
    <div className=" flex items-center justify-center py-6 h-screen bg-darkBG">
      {/* <h2 onClick={() => console.log(appointments)}>
        Click here to display data in console
      </h2>
      <SketchPicker color={selectedColor} onChange={handleChange} />
       */}
      <Paper style={{ width: "90%", height: 600 }}>
        <Scheduler data={state}>
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />

          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <AllDayPanel />
          <ConfirmationDialog />

          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip showCloseButton showOpenButton />
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
