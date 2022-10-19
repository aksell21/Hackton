import { useState } from "react"
import Buttons from "../buttons/Buttons";
import styles from "./Header.module.css"
import Link from 'next/link'

//Simples CSS, 
export default function Header() {
    return (
        <div>
            <div className={styles.headBar}>
                <Link href="/">Logo</Link>
                <Link href="/login"><Buttons>Login</Buttons ></Link>
            </div>
            <div className={styles.headSmallBar}></div>
        </div>
    );
}