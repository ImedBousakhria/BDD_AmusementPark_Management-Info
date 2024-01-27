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

const colors = [
  "#C3C2FF",
  "#66D1F3",
  "#F1B7C1",
  "#FBCB77",
  "#E3E9BE",
  "#FFCEAB",
  "#A7EAD1",
];

const Schedule = () => {
  const [state, setState] = useState([]); // Initial state is an empty array
  const selectedColorRef = useRef("#C3C2FF"); // Initial color

  const [selectedZone, setSelectedZone] = React.useState(null);
  const [selectedTeam, setSelectedTeam] = React.useState(null);

  // Filter appointments based on selected zone and team
  const filteredAppointments = state.filter((appointment) => {
    const zoneMatches =
      !selectedZone || appointment.zone === selectedZone;
    const teamMatches =
      !selectedTeam || appointment.team === selectedTeam;
    return zoneMatches && teamMatches;
  });

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

  const FormBasicLayout = (props) => {
    const { onFieldChange, appointmentData } = props;
    const handleChange = (color) => {
      selectedColorRef.current = color.hex;
      onFieldChange({ color: color.hex });
    };

    return (
      <AppointmentForm.BasicLayout {...props}>
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
        <Scheduler data={filteredAppointments}>
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
            basicLayoutComponent={FormBasicLayout}
          />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
