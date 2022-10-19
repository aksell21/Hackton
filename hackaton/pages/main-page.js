import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Buttons from "../components/buttons/Buttons";

const locales = {
  pt: require("date-fns/locale/pt"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Dummy data
const bookings = [
  {
    title: "Hackathon",
    allDay: true,
    start: new Date(2022, 9, 19),
    end: new Date(2022, 9, 20),
  },
  {
    title: "Vacation",
    start: new Date(2022, 9, 24),
    end: new Date(2022, 9, 26),
  },
  {
    title: "Meeting",
    start: new Date(2022, 10, 10, 10, 10, 10),
    end: new Date(2022, 10, 13, 10, 10, 10),
  },
];

export default function MainPage() {
  //STATES
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allBokkings, setAllBookings] = useState(bookings); // make all events into a state

  // Event Handlers
  const handleAddEvent = () => {
    setAllBookings([...allBokkings, newEvent]); // pushing the new event into the All Events array
  };

  return (
    <div>
      {/* <WeeklyCalendar /> */}
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        ></input>
      </div>

      <DatePicker
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholderText="End Date"
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <Buttons style={{ marginTop: "10px" }} onClick={handleAddEvent}>
        Submit Event
      </Buttons>

      <Calendar
        localizer={localizer}
        events={allBokkings}
        startAccessor="start"
        endAccessor="end"
        a
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}
