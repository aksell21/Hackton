<<<<<<< HEAD
import styles from "./WeeklyCalendar.module.css";
import { useState } from "react";
import Link from "next/link"
=======
import styles from "./WeeklyCalendar.module.css"
import { useState } from "react"
import Booking from "../booking/Booking"
import Link from 'next/link'
>>>>>>> afd1269ef0c64f5af32e5cf48b1cafd81dd1870c

const WeeklyCalendar = () => {
  // Booking Handler
  const addBookingHandler = () => {
    console.log("clicked");
  };

    //STATES
    const [isEmpty, setIsEmpty] = useState(true); // is the cell empty
    const [bookingStatus, setBookingStatus] = useState("+") 
    
    // Booking Handler
   /*  const addBookingHandler = () => {
        setIsEmpty(current => !current); //makes the state from true to false
    } */


    //Calendar as a table
    return (
        <div>
            <table className={styles.table}>
                <tbody>
                <tr id="tr" > <th rowSpan="2">Timings</th><th colSpan="5">WeekDays</th></tr>
                <tr>
                    <td id="td"><p>Monday</p></td>
                    <td id="td"><p>Tuesday</p></td>
                    <td id="td"><p>Wednesday</p></td>
                    <td id="td"><p>Thursday</p></td>
                    <td id="td"><p>Friday</p></td>
                </tr>
                <tr>
                    <td id="td"><p>8:00 to 8:45</p></td>
                        <td id="1"> {isEmpty && <Link href="/booking"><button className={styles.btn}>{bookingStatus}</button></Link>}</td>
                        <td id="2"> {isEmpty && <Link href="/booking"><button className={styles.btn}>{bookingStatus}</button></Link>}</td>
                        <td id="3"> { isEmpty &&  <Link href="/booking"><button className={styles.btn}>{bookingStatus}</button></Link>}</td>
                        <td id="4"> { isEmpty &&  <Link href="/booking"><button className={styles.btn}>{bookingStatus}</button></Link>}</td>
                        <td id="5"> { isEmpty &&  <Link href="/booking"><button className={styles.btn}>{bookingStatus}</button></Link>}</td>
                </tr>
                <tr>
                    <td id="6"><p>9:00 to 9:45</p></td>
                    <td id="7" onClick={() => console.log("hey key 7")}></td>
                    <td id="8" onClick={() => console.log("hey key 7")}></td>
                    <td id="9" onClick={() => console.log("hey key 7")}></td>
                    <td id="10" onClick={() => console.log("hey key 7")}></td>
                    <td id="11" onClick={() => console.log("hey key 7")}></td>
                    
                </tr>
                <tr>
                    <td id="12"><p>10:00 to 10:45</p></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td id="td"><p>11:00 to 11:45</p></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td id="td"><p>13:00 to 13:45</p></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    </tbody>
            </table>
        </div>
    )

};
export default WeeklyCalendar;
