import Buttons from "../buttons/Buttons";
import styles from "./Login.module.css"
import Link from "next/link"


export default function Login() {
    return (
        <div className={styles.loginDivOut}>
        <div className={styles.loginDiv}>
            <h2> Login</h2>
            <form>
                <div className={styles.loginForm}>
                    <span>Username:</span>
                    <input id="username" name="username" placeholder="username" />
                    <br />
                    <span>Password:</span>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                    />
                    <br />
                    <Link href="/">
                        <Buttons>Login</Buttons>
                    </Link>
                </div>
            </form>
        </div>
        </div>
    );
}
