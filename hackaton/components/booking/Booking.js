import styles from "./Booking.module.css";

export default function Booking() {
  return (
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
      </div>
    </div >
  );
}
