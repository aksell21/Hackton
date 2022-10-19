import styles from "./Booking.module.css";
import { React } from "react"
import { fazPedido } from "../../pages/api/src";
import Buttons from "../buttons/Buttons";

export default function Booking() {
  const [appoint, setAppoint] = useState({ name: "", email: "", exercices: "", data : "" })
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultado = await fazPedido("/api/adicionarappoint", "POST", appoint)
    setAppoint(res.body)

    if (resultado.status === 400) {
      setErro(resultado.body.messagens)
    }
   

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
          <input 
          value={appoint.name}
          onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, name: e.target.value }))}
          id="username" name="username" placeholder="usrename" />
          <br />
          Email:
          <br />
          <input 
          value={appoint.email}
          onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, name: e.target.value }))}
          id="Email" name="email" placeholder="email" />
          <br />
          Date:
          <br />
          <input
            value={appoint.data}
            onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, data: e.target.value }))}
            type="date"
            id="Email"
            name="email"
            placeholder="dd/mm/yyyy"
          />
          <br />
          Exercise:
          <br />
          <select id="exercise" name="Exercise" 
          onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, exercices: e.target.value }))}>
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
