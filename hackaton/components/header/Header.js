import { useState } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./Header.module.css";
import Link from "next/link";

//Simples CSS,
export default function Header() {
  return (
    <div>
      <div className={styles.headBar}>
        <Link href="/main-page">
          <span className={styles.title}>Odyssey</span>
        </Link>
      </div>
      <div className={styles.headSmallBar}></div>
    </div>
  );
}
<<<<<<< HEAD
=======
export function HeaderLoged() {
  return (
    <div>
      <div className={styles.headBar}>
        <Link href="/main-page">
          <span className={styles.title}>Odyssey</span>
        </Link>
      </div>
      <div className={styles.headSmallBar}></div>
    </div>
  )
}
>>>>>>> d22a2a8c0bf7608b065427c768417623538ed4e7
