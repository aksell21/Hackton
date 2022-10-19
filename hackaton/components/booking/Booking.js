import styles from "./Booking.module.css";
<<<<<<< HEAD
import Link from "next/link";
import Buttons from "../buttons/Buttons";
=======
>>>>>>> 6b313754c2e050cbdd2024274e8259e5d553822d

export default function Booking() {
  return (
<<<<<<< HEAD
    <div className={styles.outerDiv}>

      <div className={styles.innerDiv}>
        <h1> Booking Details</h1>
        <br />
        <div className="bookingId">
          <form>
            Name:
            <br />
            <input id="username" name="username" placeholder="username" />
            <br />
            Email:
            <br />
            <input id="Email" name="email" placeholder="email" />
            <br />
            Exercise:
            <br />
            <input type="checkbox" />
            Muscles
            <br />
            <input type="checkbox" />
            Shoulders <br />
            <input type="checkbox" />
            Leg day
            <br />
            <input type="checkbox" />
            Other
            <br />
            <input id="details" name="details" />
            <br />
            <br />
            <button
              type="submit"
              onClick={() => alert("Appointment Booked ")}
              className={styles.alert}
            >
              Book
            </button>
          </form>
        </div>
=======
    <div
      className="booking"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1> Booking Details</h1>
      <br />
      <div className="bookingId">
        <form>
          Name:
          <br />
<<<<<<< HEAD
          <input id="username" name="username" placeholder="username" />
=======
          <input id="username" name="username" placeholder="usrename" />
>>>>>>> 6b313754c2e050cbdd2024274e8259e5d553822d
          <br />
          Email:
          <br />
          <input id="Email" name="email" placeholder="email" />
          <br />
<<<<<<< HEAD
          Date:
          <br />
          <input type="date" id="Email" name="email" placeholder="dd/mm/yyyy" />
          <br />
          Exercise:
          <br />
          <select id="exercise" name="Exercise">
            <option value="v1">Muscles</option>
            <option value="v2">Shoulders</option>
            <option value="v3">Leg day</option>
            <option value="v4">Other</option>
          </select>
          <br />
          <Link href="/main-page">
            <Buttons type="submit"> Sumbit </Buttons>
          </Link>
=======
          Exercise:
          <br />
          <input type="checkbox" />
          Muscles
          <br />
          <input type="checkbox" />
          Shoulders <br />
          <input type="checkbox" />
          Leg day
          <br />
          <input type="checkbox" />
          Other
          <br />
          <input id="details" name="details" />
          <br />
          <br />
          <button
            type="submit"
            onClick={() => alert("Appointment Booked ")}
            className={styles.alert}
          >
            Book
          </button>
>>>>>>> 6b313754c2e050cbdd2024274e8259e5d553822d
        </form>
>>>>>>> 821fcee62dadacf0b18c834c89a603acf836b283
      </div>
    </div >
  );
}
