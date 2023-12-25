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
  AllDayPanel,
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
      let data = prevState;
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
      return data;
    });
  };

  const FormOverlay = ({children}) => {

    return (
      <AppointmentForm.Overlay visible={visible}
      target={target}
      fullSize>{children}</AppointmentForm.Overlay>
    )

    }

  const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#C3C2FF85",
        borderRadius: "8px",
        border: "1.5px solid #C3C2FF",
        color: "#fff",
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const CustomTooltip = ({ appointmentData }) => {
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

  const [selectedColor, setSelectedColor] = useState("#ff0000"); // Initial color
  const handleChange = (color) => {
    console.log(color, color.hex);
    setSelectedColor(color);
  };

  return (
    <div className=" flex items-center justify-center py-6 h-screen bg-darkBG">
      {/* <h2 onClick={() => console.log(appointments)}>
        Click here to display data in console
      </h2>
      <SketchPicker color={selectedColor} onChange={handleChange} />
      <CirclePicker /> */}
      <Paper style={{ width: "90%", height: 600 }}>
        <Scheduler data={state}>
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />

          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <AllDayPanel/>
          <ConfirmationDialog />

          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm overlayComponent={FormOverlay} />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;



/* import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import LocationOn from '@mui/icons-material/LocationOn';
import Notes from '@mui/icons-material/Notes';
import Close from '@mui/icons-material/Close';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Create from '@mui/icons-material/Create';


const AppointmentFormContainerBasic = (props) => {
  const [appointmentChanges, setAppointmentChanges] = useState({});

  const getAppointmentData = () => {
    const { appointmentData } = props;
    return appointmentData;
  };

  const getAppointmentChanges = () => {
    return appointmentChanges;
  };

  const changeAppointment = ({ field, changes }) => {
    const nextChanges = {
      ...getAppointmentChanges(),
      [field]: changes,
    };
    setAppointmentChanges(nextChanges);
  };

  const commitAppointment = (type) => {
    const { commitChanges } = props;
    const appointment = {
      ...getAppointmentData(),
      ...getAppointmentChanges(),
    };
    if (type === 'deleted') {
      commitChanges({ [type]: appointment.id });
    } else if (type === 'changed') {
      commitChanges({ [type]: { [appointment.id]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    setAppointmentChanges({});
  };

  const {
    visible,
    visibleChange,
    appointmentData,
    cancelAppointment,
    target,
    onHide,
  } = props;

  const displayAppointmentData = {
    ...appointmentData,
    ...getAppointmentChanges(),
  };

  const isNewAppointment = appointmentData.id === undefined;
  const applyChanges = isNewAppointment
    ? () => commitAppointment('added')
    : () => commitAppointment('changed');

  const textEditorProps = (field) => ({
    variant: 'outlined',
    onChange: ({ target: change }) => changeAppointment({
      field: [field], changes: change.value,
    }),
    value: displayAppointmentData[field] || '',
    label: field[0].toUpperCase() + field.slice(1),
  });

  const pickerEditorProps = (field) => ({
    value: displayAppointmentData[field],
    onChange: (date) => changeAppointment({
      field: [field], changes: date ? date.toDate() : new Date(displayAppointmentData[field]),
    }),
    ampm: false,
    inputFormat: 'DD/MM/YYYY HH:mm',
    onError: () => null,
  });

  const startDatePickerProps = pickerEditorProps('startDate');
  const endDatePickerProps = pickerEditorProps('endDate');

  const cancelChanges = () => {
    setAppointmentChanges({});
    visibleChange();
    cancelAppointment();
  };

  return (
    <AppointmentForm.Overlay
      visible={visible}
      target={target}
      fullSize
      onHide={onHide}
    >
      <div>
        <div>
          <IconButton onClick={cancelChanges} size="large">
            <Close color="action" />
          </IconButton>
        </div>
        <div>
          <div>
            <Create color="action" />
            <TextField
              {...textEditorProps('title')}
            />
          </div>
          <div>
            <CalendarToday color="action" />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                label="Start Date"
                renderInput={
                  props => <TextField {...props} />
                }
                {...startDatePickerProps}
              />
              <DateTimePicker
                label="End Date"
                renderInput={
                  props => <TextField {...props} />
                }
                {...endDatePickerProps}
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocationOn color="action" />
            <TextField
              {...textEditorProps('location')}
            />
          </div>
          <div>
            <Notes color="action" />
            <TextField
              {...textEditorProps('notes')}
              multiline
              rows="6"
            />
          </div>
        </div>
        <div>
          {!isNewAppointment && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                visibleChange();
                commitAppointment('deleted');
              }}
            >
              Delete
            </Button>
          )}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              visibleChange();
              applyChanges();
            }}
          >
            {isNewAppointment ? 'Create' : 'Save'}
          </Button>
        </div>
      </div>
    </AppointmentForm.Overlay>
  );
}; */