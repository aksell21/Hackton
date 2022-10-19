import styles from "./Booking.module.css";
import { React } from "react"
import { fazPedido } from "../../pages/api/src";

export default function Booking() {
  const [appoint, setAppoint] = useState({ name: "", email: "", exercices: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultado = await fazPedido("/api/adicionarappoint", "POST", appoint)
    setAppoint(res.body)
  }

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
        <form onSubmit={handleSubmit}>
          Name:
          <br />
          <input id="username" name="username" placeholder="usrename" />
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
            className={styles.alert}
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
