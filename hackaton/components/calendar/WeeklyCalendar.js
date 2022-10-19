import styles from "./WeeklyCalendar.module.css"
import { useState } from "react"

const WeeklyCalendar = () => {

    const [date, setDate] = useState(new Date());
    //Change view to weekly

    // Booking Handler
    const addBookingHandler = () => {
        console.log("clicked");
    }

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
                    <td id="td"><p>9 to 10</p></td>
                    <td id="td"><button onClick={addBookingHandler} >+</button></td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                </tr>
                <tr>
                    <td id="td"><p>10 to 11</p></td>
                    <td id="7" onClick={() => console.log("hey key 7")}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td id="td"><p>Segunda</p></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td id="td"><p>Segunda</p></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td id="td"><p>Segunda</p></td>
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
