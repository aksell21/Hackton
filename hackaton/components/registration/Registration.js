import { Children } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./Registration.module.css"
import { useRouter } from 'next/router';
import { fazPedido } from "../../pages/api/src";
import { useState } from "react";
export default function Register() {
  const router = useRouter()
  const [user, setUser] = useState({ user: "", email: "", password: "", number: "" })
  const [erro, setErro] = useState("")

  const handleSubmit = async () => {

    setErro("")
    const resultado = await fazPedido("/api/signup/", "POST", user)
    // const state = setState(resultado.body)

    if (resultado.status === 400) {
      setErro(resultado.body.errors)
    }

    if (resultado.status === 201) {
      console.log(resultado.status)
      router.push("/")

    }

    setMensagem(resultado.body.message)

  }
  return (
    <div className={styles.outterDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.title}><h2>Registration</h2></div>
        <form>
          <div className={styles.content}>
            <span>Name:</span>
            <input
              value={user.user}
              onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, user: e.target.value }))} />
            <span>E-mail:</span>

            <input
             value={user.email}
              onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))}
              placeholder="example@example.com"
            />
            <span>Password:</span>
            <input
             value={user.password}
              onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))}
              placeholder="Password"
            />
            
            <span>Number:</span>
            <input onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, number: e.target.value }))} placeholder="999 999 999" />

          </div>
          <Buttons
            onClick={() => handleSubmit()}>Register</Buttons>
        </form>
      </div>
    </div>
  );
}
