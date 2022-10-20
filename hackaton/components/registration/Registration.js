import { Children } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./Registration.module.css"
import { fazPedido } from "../../src/pedidos";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"
export default function Register() {


  const [user, setUser] = useState({ user: "", email: "", password: "", number: "" })
  const [erro, setErro] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setErro("")
    const resultado = await fazPedido("/api/signup/", "POST", user)
    // const state = setState(resultado.body)

    if (resultado.status === 400) {
      setErro(resultado.body.errors)
    }

    if (resultado.status === 201) {
      console.log(resultado.status)
      router.push("/main-page")

    }

    // setMensagem(resultado.body.message)

  }
  return (
    <div className={styles.outterDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.title}><h2>Registration</h2></div>
        <form onSubmit={handleSubmit}>
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
            {erro.email && <div>{erro.email}</div>}
            <span>Password:</span>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))}
              placeholder="Password"
            />
            {erro.password && <div>{erro.password}</div>}

            <span>Number:</span>
            <input onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, number: e.target.value }))} placeholder="999 999 999" />

          </div>
          <Buttons>Adicionar Cliente</Buttons>
        </form>
      </div>
    </div>
  );
}
