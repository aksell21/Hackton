import styles from "./Booking.module.css";
import { React } from "react"
import { fazPedido } from "../../pages/api/src";
import Buttons from "../buttons/Buttons";
import { useState } from 'react';
import Link from "next/link"

export default function Booking() {
  const [appoint, setAppoint] = useState({ name: "", email: "", exercices: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultado = await fazPedido("/api/adicionarappoint", "POST", appoint)
    setAppoint(res.body)
  }

  return (
    <div className={styles.outerDiv}>
    <div className={styles.innerDiv}>
      <div className={styles.title}><h1> Booking Details</h1></div>
        <form onSubmit={handleSubmit}>
          <div className={styles.content}>
          Name:
          <input id="username" name="username" placeholder="Name" />
          <br />
          Email:
          <input id="Email" name="email" placeholder="email" />
          <br />
          What are we working?
          <input placeholder="Arms"/>
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
