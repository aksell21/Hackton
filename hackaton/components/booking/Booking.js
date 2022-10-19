import styles from "./Booking.module.css";
<<<<<<< HEAD
import { React } from "react"
import { fazPedido } from "../../pages/api/src";
=======
<<<<<<< HEAD
import Buttons from "../buttons/Buttons";
import Link from "next/link";
=======
import Link from "next/link";
import Buttons from "../buttons/Buttons";
>>>>>>> afd1269ef0c64f5af32e5cf48b1cafd81dd1870c
>>>>>>> 348e7b4b54934c6fe4d9460d57c87df1d12ffcce

export default function Booking() {
  const [appoint, setAppoint] = useState({ name: "", email: "", exercices: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultado = await fazPedido("/api/adicionarappoint", "POST", appoint)
    setAppoint(res.body)
  }

  return (
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
            </button>
          </form>
        </div>
      </div>
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
            <input
              type="date"
              id="Email"
              name="email"
              placeholder="dd/mm/yyyy"
            />
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
=======
            </Buttons>
          </div>
>>>>>>> 348e7b4b54934c6fe4d9460d57c87df1d12ffcce
        </form>
      </div>
>>>>>>> afd1269ef0c64f5af32e5cf48b1cafd81dd1870c
    </div>
  );
}
