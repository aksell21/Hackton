import Buttons from "../buttons/Buttons";
import styles from "./Login.module.css"
import Link from "next/link"
import { React } from "react";
import { useState } from "react";
import { fazPedido } from "../../pages/api/src";


export default function Login() {

    const [conta, setContas] = useState({ email: "", password: "" })

    const handleAuthenticate = async () => {

        const res = await fazPedido("/api/login/", "POST", conta)
        setContas(res.body)

        console.log(res)

        localStorage.setItem("token", res.body.token)

        if (res.status === 400) {
            setError(res.body.errors)
        }


    }

    return (
        <div className={styles.loginDivOut}>
            <div className={styles.loginDiv}>
                <h2> Login</h2>
                <form>
                    <div className={styles.loginForm}>
                        <span>Username:</span>
                        <input
                            value={setContas.email}
                            onChange={(e) => setContas(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))}
                            id="username"
                            name="username"
                            placeholder="Email" />

                        <br />
                        <span>Password:</span>
                        <input
                            value={setContas.password}
                            onChange={(e) => setContas(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                        />

                        <br />
                        <Link href="/">
                            <Buttons onClick={() => handleAuthenticate()}>Login</Buttons>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
