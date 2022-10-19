import Buttons from "../buttons/Buttons";
import styles from "./Booking.module.css";

export default function Booking() {
  return (
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
          <input id="username" name="username" placeholder="usrename" />
          <br />
          Email:
          <br />
          <input id="Email" name="email" placeholder="email" />
          <br />
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
          <Buttons
            type="submit"
            onClick={() => alert("Appointment Booked ")}
            className={styles.alert}
          >
            Book
          </Buttons>
        </form>
      </div>
    </div>
  );
}
