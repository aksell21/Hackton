import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { fazPedido } from "../../src/pedidos"

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Dummy data of bookings
const bookings = [
    {
        title: "Hackathon",
        allDay: false,
        start: new Date(2022, 9, 19, 12),
        end: new Date(2022, 9, 20, 12),
    },
    {
        title: "Vacation",
        allDay: false,
        start: new Date(2022, 9, 24, 10),
        end: new Date(2022, 9, 24, 11),
    },
    {
        title: "Meeting",
        allDay: false,
        start: new Date(2022, 10, 10, 10, 10, 10),
        end: new Date(2022, 10, 13, 10, 10, 10),
    },
];

// JSX code
export default function MainPage() {
    //STATES
    //const resultado = await fazPedido("/api/adicionarappoint", "POST", appoint);
    const [newEvent, setNewEvent] = useState({
        title: "",
        start: "",
        end: "",
        exercise: "",
        allDay: false,
    });
    const [allBokkings, setAllBookings] = useState(bookings); // make all events into a state

    // Event Handlers
    const handleAddEvent = () => {
        setAllBookings([...allBokkings, newEvent]); // pushing the new event into the All Events array
    };

    const handleSelectSlot = useCallback(
        async ({ start, end }) => {
            const title = window.prompt("Add Execercise   :");
            if (title) {
                console.log("YEEHOO")
                const resultado = await fazPedido("/api/adicionarappoint", "POST", {
                    title,
                    start,
                    end,

                });
                setAllBookings((prev) => [...prev, { start, end, title }]);
                // setNewEvent(resultado.body)

            } else {

                console.log("WOOHOO")
            }
        },
        [setAllBookings]
    );

    const handleSelectEvent = useCallback(
        (event) => {
            const alerta = window.confirm(event.title)
            if (alerta === true) {
                console.log("OK")
            } else {
                console.log("NOT OK")

            }
        },
        []
    );

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2015, 3, 12),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    );

    return (
        <Calendar
            selectable
            defaultView="week"
            localizer={localizer}
            events={allBokkings}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            // onSelectEnd={() => console.log("HEY HO")}
            scrollToTime={scrollToTime}
            style={{ height: 500, margin: "50px" }}

        />
    );
}

MainPage.propTypes = {
    localizer: PropTypes.instanceOf(DateLocalizer),
};
