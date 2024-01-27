import React, { useState, useRef } from "react";
import { CirclePicker } from "react-color";

import team from "./assets/icons/team.svg";
import zone from "./assets/icons/zone.svg";

import {
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

import { Paper } from "@mui/material";
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
import Selector from "./components/Selector";
import { zones } from "./consts";
const appointments = [
  {
    id: 1,
    title: "Task 1",
    startDate: "2024-01-22T09:00Z",
    endDate: "2024-01-22T10:30Z",
    color: "#C3C2FF",
  },
  {
    id: 2,
    title: "Task 2",
    startDate: "2024-01-23T11:00Z",
    endDate: "2024-01-23T12:30Z",
    color: "#66D1F3",
  },
  {
    id: 3,
    title: "Task 3",
    startDate: "2024-01-24T13:00Z",
    endDate: "2024-01-24T14:30Z",
    color: "#F1B7C1",
  },
  {
    id: 4,
    title: "Task 4",
    startDate: "2024-01-25T15:00Z",
    endDate: "2024-01-25T16:30Z",
    color: "#FBCB77",
  },
  {
    id: 5,
    title: "Task 5",
    startDate: "2024-01-26T09:00Z",
    endDate: "2024-01-26T10:30Z",
    color: "#E3E9BE",
  },
  {
    id: 6,
    title: "Task 6",
    startDate: "2024-01-27T11:00Z",
    endDate: "2024-01-27T12:30Z",
    color: "#FFCEAB",
  },
  {
    id: 7,
    title: "Task 7",
    startDate: "2024-01-28T13:00Z",
    endDate: "2024-01-28T14:30Z",
    color: "#A7EAD1",
  },
];



// Helper function to generate appointments for each team in each zone
/* const generateAppointments = (zones) => {
  let appointments = [];
  const currentDate = new Date();
  const weekStartDate = new Date(currentDate);
  const weekEndDate = new Date(currentDate);
  weekEndDate.setDate(weekEndDate.getDate() + 7); // Next week

  zones.forEach((zone) => {
    zone.teams.forEach((team) => {
      // Generate appointments for each team
      team.appointments.forEach((appointment, index) => {
        const startDate = new Date(weekStartDate);
        const endDate = new Date(weekEndDate);
        appointments.push({
          id: appointments.length + 1,
          ...appointment,
          startDate,
          endDate,
          color: appointment.color,
        });
      });
    });
  });

  return appointments;
}; */

const Schedule = () => {
  const [state, setState] = useState(appointments || []); // Assuming 'zones' constant is available
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

  const colors = [
    "#C3C2FF",
    "#66D1F3",
    "#F1B7C1",
    "#FBCB77",
    "#E3E9BE",
    "#FFCEAB",
    "#A7EAD1",
  ];

  const FormBasicLayout = (props) => {
    const { onFieldChange, appointmentData } = props;
    const handleChange = (color) => {
      selectedColorRef.current = color.hex;
      onFieldChange({ color: color.hex });
    };

    return (
      <AppointmentForm.BasicLayout {...props}>
        {/* <TextField
          label="Title"
          value={appointmentData?.title}
          onChange={(e) => onFieldChange({ title: e.target.value })}
        /> */}
        <div className="flex flex-col my-6">
          Pick a background color
          <CirclePicker
            color={selectedColorRef.current}
            onChange={handleChange}
            circleSize={24}
            colors={colors}
            width="100%"
          />
        </div>
      </AppointmentForm.BasicLayout>
    );
  };

  const FormLayout = (props) => {
    const { basicLayoutComponent, commandLayoutComponent } = props;
    return <AppointmentForm.Layout {...props}></AppointmentForm.Layout>;
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

  const CustomTooltip = ({ children, appointmentData, ...restProps }) => {
    const { title } = appointmentData;

    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <div style={{ fontWeight: "bold" }}>Test Task</div>
        <div onClick={() => console.log(appointmentData)}>Time: {title}</div>
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

  const [selectedZone, setSelectedZone] = React.useState(null);
  const [selectedTeam, setSelectedTeam] = React.useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-darkBG gap-[2rem]">
      <div className=" w-[50%] flex gap-6 place-self-start ">
        <Selector
          list={zones.map((zone) => zone.title)}
          selectCategory={"Zone"}
          icon={zone}
          selectedOption={selectedZone}
          setSelectedOption={setSelectedZone}
        />
        <Selector
          list={
            selectedZone
              ? zones
                  .find((zone) => zone.title === selectedZone)
                  ?.teams.map((team) => team.name)
              : []
          }
          selectCategory={"Team"}
          icon={team}
          selectedOption={selectedTeam}
          setSelectedOption={setSelectedTeam}
        />
        <button className="bg-creamBlue flex items-center justify-center px-2 rounded-md hover:opacity-70 font-semibold">
          Select
        </button>
      </div>
      <Paper style={{ width: "100%", height: 700, borderRadius: 10 }}>
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
