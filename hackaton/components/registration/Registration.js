<<<<<<< HEAD
import { Children } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./Registration.module.css"

export default function Register() {
  return (
    <div className={styles.outterDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.title}><h2>Registration</h2></div>
        <form>
          <div className={styles.content}>
            <span>Name:</span>
            <input />
            <span>E-mail:</span>
            <input placeholder="example@example.com" />
            <span>Number:</span>
            <input placeholder="999 999 999" />
          </div>
          <Buttons>Register</Buttons>
        </form>
      </div>
    </div>
  );
}
=======
import styles from "./Registration.module.css";

export default function Register() {
  return (
    <div
      className="register"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1> Registration</h1>
      <form>
        <div className="registerName">
          Username:
          <br />
          <input id="username" name="username" placeholder="usrename" />
          <br />
          Email:
          <br />
          <input id="email" name="email" placeholder="Email" />
          <br />
          Password:
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <br />
          Confirm Password:
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <button type="submit" onClick={() => alert("Account Registered")}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
>>>>>>> 8d476329c02d96025e5471f7eee2f46dcca24480
