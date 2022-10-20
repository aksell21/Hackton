import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { fazPedido } from "../../src/pedidos";

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

    const [allBookings, setAllBookings] = useState(bookings); // Make all events into a state

    const [isCreated, setIsCreated] = useState(false); // When an event is created, make it unselectable

    // Event Handlers
    const handleAddEvent = () => {
        setAllBookings([...allBookings, newEvent]); // Pushing the new event into the All Events array
    };

    // Alert appears to input the title of the booking
    // Then the new event is added to the All Events array
    const handleSelectSlot = useCallback(
        async ({ start, end }) => {
            const title = window.prompt("Add Execercise:");
            if (title) {
                console.log("YEEHOO");
                const resultado = await fazPedido("/api/adicionarappoint", "POST", {
                    title,
                    start,
                    end,
                });

                setAllBookings((prev) => {
                    if (
                        !prev.some(
                            (e) =>
                                (start <= e.start && end >= e.start) ||
                                (start <= e.end && end >= e.end)
                        )
                    ) {
                        return [...prev, { start, end, title }];
                    }
                    return prev;
                });

                // setNewEvent(resultado.body)
            } else {
                console.log("WOOHOO");
            }
        },
        [setAllBookings]
    );

    // When you click on an event, a window appears containing the title of the event. TO DO: if possible, add the name of the person on it
    const handleSelectEvent = useCallback((event) => {
        const alerta = window.confirm(event.title);
        if (alerta === true) {
            console.log("OK");
        } else {
            console.log("NOT OK");
        }
    }, []);

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2015, 3, 12),
            scrollToTime: new Date(1970, 1, 1, 6),
        }),
        []
    );

    // min and max are the only hours that appear on the calendar
    return (
        <Calendar
            selectable
            defaultView="week"
            localizer={localizer}
            events={allBookings}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            // onSelectEnd={() => console.log("HEY HO")}
            scrollToTime={scrollToTime}
            min={new Date(2012, 10, 0, 8, 0, 0)}
            max={new Date(2012, 10, 0, 19, 0, 0)}
            style={{ height: 500, margin: "50px" }}
        />
    );
}
