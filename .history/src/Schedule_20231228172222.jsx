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
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const appointments = [
    /* {
      id: 1,
      title: "Test Task",
      startDate: moment.tz("2023-12-29T11:00", "America/New_York").toDate(),
      endDate: moment.tz("2023-12-29T15:30", "America/New_York").toDate(),
      color: "#C3C2FF",
    }, */
    /*  {
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
    }, */

    {
      id: 6,
      title: "Test Task",
      startDate: new Date("2023-12-29T09:00") /*  */,
      endDate: new Date("2023-12-29T12:30") /*  */,
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
  const colors = ["#C3C2FF", "#66D1F3", "#F1B7C1", "#FBCB77"];
  const [selectedColor, setSelectedColor] = useState("#C3C2FF"); // Initial color

  // so important : basic is for the default form, command is for command, reccurence is only a thing once isReccurent = True
  const FormLayout = (props) => {
    const { basicLayoutComponent, commandLayoutComponent, children } = props;
    return (
      <AppointmentForm.Layout
        {...props}
        basicLayoutComponent={() => {
          return null;
        }}
      >
        {/*         <div onClick={() => console.log(commandLayoutComponent())}>here Clickdiv</div>
         */}{" "}
      </AppointmentForm.Layout>
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
          <div onClick={() => console.log(children)}>here Clickdiv</div>
        </AppointmentForm.Container>
      </AppointmentForm.BasicLayout>
    );
  };

  // Actually not needed for now : it only adds some fields in footer
  const FormOverlay = (props) => {
    const { children, onHide, visible, target, appointmentData } = props;
    const handleChange = (color) => {
      setSelectedColor(color);
      onFieldChange({ color: selectedColor });
    };

    return (
      <AppointmentForm.Overlay
        onHide={onHide}
        visible={visible}
        target={target}
        children={children}
      >
        <AppointmentForm.TextEditor {...props} >
          <button type="submit">Save Appointment</button>

        </AppointmentForm.TextEditor>
        {children}
        <CirclePicker
          color={selectedColor}
          onChange={handleChange}
          circleSize={24}
          colors={colors}
        />
        <div onClick={() => console.log(props.children)}>here Clickdiv</div>
      </AppointmentForm.Overlay>
    );
  };

  const Appointment = ({ children, style, data, ...restProps }) => {
    return (
      <div
        onClick={() =>
          console.log(typeof moment(data.startDate).toDate().toUTCString())
        }
      >
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
          <ConfirmationDialog />

          <WeekView startDayHour={9} endDayHour={19} cellDuration={60} />
          <AllDayPanel />

          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm
            basicLayoutComponent={FormBasicLayout}
            layoutComponent={FormLayout}
            overlayComponent={FormOverlay}
            appointmentData={appointments}
            
          />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
