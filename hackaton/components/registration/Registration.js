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