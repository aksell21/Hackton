import styles from "./WeeklyCalendar.module.css"
import React, { useState} from "react"

const WeeklyCalendar = () => {

    const [date, setDate] = useState(new Date());
    //Change view to weekly
    
    
    return (
        <div><form>
            {/*  <div><p>20/10/2022</p></div> */}
            <table className={styles.table}>
                <tr id="tr" > <th rowSpan="2">Timings</th><th colspan="5">WeekDays</th></tr>
                <tr>
                    <td id="td"><p>Monday</p></td>
                    <td id="td"><p>Tuesday</p></td>
                    <td id="td"><p>Wednesday</p></td>
                    <td id="td"><p>Thursday</p></td>
                    <td id="td"><p>Friday</p></td>
                    </tr>
                <tr>
                    <td id="td"><p>9 to 10</p></td>
                    <td id="td"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                <tr>
                    <td id="td"><p>10 to 11</p></td>
                    <td id="7" onClick={()=> console.log("hey key 7")}></td>
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
                     
               
            </table>
            </form>
        </div>
    )
  
};
export default WeeklyCalendar;
