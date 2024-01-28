import React from 'react'

const Stall = () => {
  return (
    <div>Stall</div>
  )
}

export default Stall


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactCalendar from "react-calendar";
import { FixedSizeList } from "react-window";
import { add, format, isAfter, differenceInMinutes } from "date-fns";
import { getDaysArray, INTERVAL } from "../../config";
import "../../Calendar.css";
import axios from "axios";

const TimeRow = ({ index, style, data, activeTime, onClick }) => {
  const isActive = activeTime
    ? activeTime.getTime() === data[index].getTime()
    : false;

  return (
    <div
      style={{ ...style }}
      className={`py-2 px-3 cursor-pointer font-semibold hover:bg-gray-200 rounded-md my-3 ${
        isActive ? " bg-blue-200 hover:bg-blue-200" : ""
      }`}
      onClick={() => onClick(data[index])}
    >
      {format(data[index], "kk:mm")}
    </div>
  );
};

const TimeSelection = ({ allTimes, activeTime, onClick, onCancel, onNext }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.2 },
    }}
    className="bg-white flex flex-col justify-around px-3 py-2 rounded-md"
    style={{ height: "360px" }} // Fixed height for time selection container
  >
    <div className="mb-3 border-b pb-2 flex justify-between items-center px-1">
      <h4 className="">Selected time slot:</h4>
      <span
        onClick={onCancel}
        className="border p-1.5 cursor-pointer hover:bg-gray-300"
      >
        Back
      </span>
    </div>
    <FixedSizeList
      height={260} // Fixed height for the list of time slots
      width={200}
      itemSize={50}
      itemCount={allTimes.length}
      itemData={{
        times: allTimes,
        activeTime,
        onClick,
      }}
      style={{ overflowY: "scroll", scrollbarColor: "#D4AD6B" }}
    >
      {({ index, style }) => (
        <TimeRow
          index={index}
          style={style}
          data={allTimes}
          activeTime={activeTime}
          onClick={onClick}
        />
      )}
    </FixedSizeList>
    <div className="flex justify-between mt-3">
      <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">
        Cancel
      </button>
      <button onClick={onNext} className="bg-blue-500 text-white p-2 rounded">
        Book Appointment
      </button>
    </div>
  </motion.div>
);

export const Calendar = ({ avocat }) => {
  const [availabilityIntervals, setAvailabilityIntervals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAvailabilityIntervals = async () => {
      try {
        const response = await axios.post(
          "http://192.168.137.210:8000/creneau/afficher",
          1
        );
        console.log(response.data);
        setAvailabilityIntervals(response.data); // Store availability intervals
        setLoading(false);
      } catch (error) {
        console.error("Error fetching availability intervals:", error);
        setLoading(false);
      }
    };

    fetchAvailabilityIntervals();
  }, []);

  const [date, setDate] = useState({
    justDate: undefined,
    dateTime: undefined,
  });

  const [activeTime, setActiveTime] = useState(null);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [daysArray, setDaysArray] = useState(getDaysArray());

  const handleUpdateDaysArray = (updatedDaysArray) => {
    setDaysArray(updatedDaysArray);
  };

  const calculateAppointmentSlots = (start, end, maxAppointments) => {
    const durationInMinutes = differenceInMinutes(end, start);
    const appointmentDuration = durationInMinutes / maxAppointments;
    const appointmentSlots = [];

    let currentSlot = new Date(start);
    for (let i = 0; i < maxAppointments; i++) {
      const nextSlot = add(currentSlot, { minutes: appointmentDuration });
      appointmentSlots.push({ start: currentSlot, end: nextSlot });
      currentSlot = nextSlot;
    }

    return appointmentSlots;
  };

  const getTimes = () => {
    if (!date.justDate) return [];
    const { justDate } = date;
    const selectedDay = daysArray.find(
      (day) => day.date.getTime() === justDate.getTime()
    );

    const availableIntervals = availabilityIntervals.filter(
      (interval) =>
        format(interval.DateInterval, "yyyy-MM-dd") ===
        format(justDate, "yyyy-MM-dd")
    );

    if (availableIntervals.length === 0) {
      return []; // No available slots for this date
    }

    const { HeureDebut, HeureFin, NbrMaxRdv } = availableIntervals[0];

    const start = add(justDate, { hours: Number(HeureDebut.split(":")[0]) });
    const end = add(justDate, { hours: Number(HeureFin.split(":")[0]) });

    const appointmentSlots = calculateAppointmentSlots(start, end, NbrMaxRdv);

    return appointmentSlots.map((slot) => slot.start);
  };

  const handleDateClick = (selectedDate) => {
    setDate((prev) => ({ ...prev, justDate: selectedDate }));
    setActiveTime(null);
    setShowTimeSelection(true); // Changed to true to show time selection on date click
  };

  const handleTimeRowClick = (selectedTime) => {
    setActiveTime(selectedTime);
  };

  const [allTimes, setAllTimes] = useState([]);

  useEffect(() => {
    setAllTimes(getTimes());
  }, [date.justDate]);

  const next7Days = Array.from({ length: 7 }, (_, index) =>
    add(new Date(), { days: index })
  );

  const maxDate = add(new Date(), { days: 7 });
  const tileDisabled = ({ date }) => isAfter(date, maxDate);
  const tileClassName = ({ date }) =>
    next7Days.some(
      (day) => format(day, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    )
      ? "next-7-days"
      : null;

  const handleBooking = async () => {
    // Define the booking data
    const bookingData = {
      id_client: 1, // Replace with the actual client ID
      id_avocat: 1, // Replace with the actual lawyer ID
      id_free_time_slot: 1, // Replace with the actual free time slot ID
    };

    try {
      // Make a POST request to book the appointment
      const response = await axios.post(
        "http://192.168.137.210:8000/rdv/prendre_rdv",
        bookingData,
        {
          headers: {
            // Include the authorization token in the request headers
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInJvbGUiOiJjbGllbnQifQ.83gClcAqtKAETOwBYOtLfj0qhi8ZoCcD9ycq3q-IbK4`,
          },
        }
      );
      // Log the response data and a success message
      console.log(response.data);
      console.log("Appointment booked!");
    } catch (error) {
      // Log any errors
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <div className="flex flex-col my-8">
      <div className=" w-[95%] flex gap-6 justify-center">
        <div className="flex flex-col">
          <div className="flex">
            {showTimeSelection ? (
              <div className="ml-4">
                <p>2/ Choose Time:</p>
                {allTimes.length > 0 ? (
                  <TimeSelection
                    allTimes={allTimes}
                    activeTime={activeTime}
                    onClick={handleTimeRowClick}
                    onCancel={() => setShowTimeSelection(false)}
                    onNext={handleBooking}
                  />
                ) : (
                  <div>No available slots for this date</div>
                )}
              </div>
            ) : (
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "tween", duration: 0.2 },
                  }}
                  className="bg-white flex flex-col justify-around pl-3 py-2 pr-3 rounded-md"
                  style={{ height: "360px" }} // Fixed height for calendar container
                >
                  <ReactCalendar
                    minDate={new Date()}
                    maxDate={maxDate}
                    className="REACT-CALENDAR"
                    view="month"
                    onClickDay={handleDateClick}
                    tileDisabled={tileDisabled}
                    tileClassName={tileClassName}
                  />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;