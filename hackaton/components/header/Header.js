import { useState } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./Header.module.css";
import Link from "next/link";

//Simples CSS,
export default function Header() {
<<<<<<< HEAD
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
=======
    return (
        <div>
            <div className={styles.headBar}>
                <Link href="/"><span>Odyssey</span></Link>
<<<<<<< HEAD
              
              
=======
                <Link href="/"><Buttons>Login</Buttons ></Link>
>>>>>>> 8beaa5a1661b84608d6d4f0f05ac8b08efd2e16a
            </div>
            <div className={styles.headSmallBar}></div>
        </div>
    );
}
>>>>>>> 2989fbfbfa1ed4ab44948eb8a48c6510a0ac422a
