import { useState } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./Header.module.css";
import Link from "next/link";

//Simples CSS,
export default function Header() {

  return (
    <div>
      <div className={styles.headBar}>
        <Link href="/">
          <span>Odyssey</span>
        </Link>
        <Link href="/">
          <Buttons>Login</Buttons>
        </Link>
      </div>
      <div className={styles.headSmallBar}></div>
    </div>
  );
}
<<<<<<< HEAD



=======
>>>>>>> a8f4b78636b4a57a7313a9b0db37d1bd8da02dfd
