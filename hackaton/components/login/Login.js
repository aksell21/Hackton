import Buttons from "../buttons/Buttons";
import styles from "./Login.module.css"
import Link from "next/link"
import { React } from "react";
import { fazPedido } from "../../pages/api/src";
import { useRouter } from 'next/router'

export default function Login() {
    const [authValues, setAuthValues] = useState({ email: "", password: "" })
    const [erro, setError] = useState("")
    const handleAuthenticate = async () => {

        setError("")
        const res = await fazPedido("/api/login/", "POST", authValues)
        setAuthValues(res.body)
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
                            alue={authValues.email}
                            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))}
                            id="username"
                            name="username"
                            placeholder="Email" />
                        {erro.email && <div>{erro.email}</div>}
                        <br />
                        <span>Password:</span>
                        <input
                            value={authValues.password}
                            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                        />
                        {erro.password && <div>{erro.password}</div>}
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
