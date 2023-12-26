import React, { useState } from "react";
import { CirclePicker } from "react-color";
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
      startDate: "2023-12-25T11:00",
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
        console.log(added);
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
    const { basicLayoutComponent, commandLayoutComponent, onFieldChange, appointmentData } = props;

    return (
      <AppointmentForm.Layout {...props} basicLayoutComponent={() => {return null}}>
      </AppointmentForm.Layout>
    );
  };

  // Actually not needed for now : it only adds some fields in footer
   const FormOverlay = (props) => {
    const { children, onHide, visible, target } = props;
    const handleChange = (color) => {
      setSelectedColor(color);
    };

    return (
      <AppointmentForm.Overlay
        onHide={onHide}
        visible={visible}
        target={target}
        children={children}
      >
        <AppointmentForm.Container {...props}>
          <TextField
            label="Title"
            value={""}
            onChange={(e) => onFieldChange({ title: e.target.value })}
          />

<div className="border-t border-gray-200 flex flex-col gap-4 px-8 py-2.5 font-semibold">
          <h3>Pick a background color</h3>
          <CirclePicker
            color={selectedColor}
            onChange={handleChange}
            circleSize={24}
            colors={colors}
          />
        </div>
          <div onClick={() => console.log(props.onFieldChange)}>Click me to print stuff</div>
        </AppointmentForm.Container>
        
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
            layoutComponent={FormLayout}
            overlayComponent={FormOverlay}
          
          />
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
};  */
