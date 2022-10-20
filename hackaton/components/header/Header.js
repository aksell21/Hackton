import { useState } from "react"
import Buttons from "../buttons/Buttons";
import styles from "./Header.module.css"
import Link from 'next/link'

//Simples CSS, 
export default function Header() {
    return (
        <div>
            <div className={styles.headBar}>
<<<<<<< HEAD
                <Link href="/login"><span>Odyssey</span></Link>
                <Link href="/login"><Buttons>Login</Buttons ></Link>
=======
                <Link href="/"><span>Odyssey</span></Link>
                <Link href="/"><Buttons>Login</Buttons ></Link>
>>>>>>> 31eba1eb4dc8cad8160af710def7cb075aa5b3c0
            </div>
            <div className={styles.headSmallBar}></div>
        </div>
    );
}