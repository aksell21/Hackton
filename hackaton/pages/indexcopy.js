import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Booking from "../components/booking/Booking";
import Register from "../components/registration/Registration";

export default function Home() {
  return (
    <div className="main">
      <Booking />
      <br />
      <Register />
    </div>
  );
}
