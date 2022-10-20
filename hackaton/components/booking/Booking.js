import styles from "./Booking.module.css";
import { React } from "react"
import { fazPedido } from "../../pages/api/src";
import Buttons from "../buttons/Buttons";
import { useState } from 'react';
import Link from "next/link"

export default function Booking() {
  const [appoint, setAppoint] = useState({ name: "", email: "", exercices: "", data : "" })
<<<<<<< HEAD
  

=======
>>>>>>> 31eba1eb4dc8cad8160af710def7cb075aa5b3c0
  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultado = await fazPedido("/api/adicionarappoint", "POST", appoint)
    setAppoint(res.body)
<<<<<<< HEAD

=======
>>>>>>> 31eba1eb4dc8cad8160af710def7cb075aa5b3c0
    if (resultado.status === 400) {
      setErro(resultado.body.messagens)
    }
  }
 

  return (
    <div className={styles.outerDiv}>
    <div className={styles.innerDiv}>
      <div className={styles.title}><h1> Booking Details</h1></div>
        <form onSubmit={handleSubmit}>
          <div className={styles.content}>
          Name:
<<<<<<< HEAD
          <br />
          <input 
          value={appoint.name}
          onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, name: e.target.value }))}
          id="username" name="username" placeholder="usrename" />
=======
          <input id="username" name="username" placeholder="Name" 
            value={appoint.name}
            onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, name: e.target.value }))}
          />
>>>>>>> 31eba1eb4dc8cad8160af710def7cb075aa5b3c0
          <br />
          Email:
          <br />
          <input 
          value={appoint.email}
          onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))}
          id="Email" name="email" placeholder="email" />
          <br />
          Date:
          <br />
          <input
            value={appoint.data}
            onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, data: e.target.value }))}
            type="date"
            placeholder="dd/mm/yyyy"
          />
          <br />
          Exercise:
          <br />
          <input 
          value={appoint.exercices}
          onChange={(e) => setAppoint(prevAuthValues => ({ ...prevAuthValues, exercices: e.target.value }))}
          id="text" name="text" placeholder="Exemple" />
          <br />
          <Buttons
            type="submit"
            onClick={() => handleSubmit}  
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
