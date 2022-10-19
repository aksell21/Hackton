import styles from "./Booking.module.css";
import Link from "next/link";
import Buttons from "../buttons/Buttons";

export default function Booking() {
  return (
    <div className={styles.outerDiv}>

      <div className={styles.innerDiv}>
        <div className={styles.title}><h2>Booking Details</h2></div>
        <br />
        <form>
          <div className={styles.content}>

            Name:
            <br />
            <input id="username" name="username" placeholder="username" />
            <br />
            Email:
            <br />
            <input id="Email" name="email" placeholder="email" />
            <br />
            What we are going to work ?
            <input type="text" placeholder="Chest"></input>
            <br />
            <Buttons
              type="submit"
              onClick={() => alert("Appointment Booked ")}
              className={styles.alert}
            >
              Book
            </Buttons>
          </div>
        </form>
      </div>
    </div>
  );
}
