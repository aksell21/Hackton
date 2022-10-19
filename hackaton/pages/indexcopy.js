import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/forms/login";
import Booking from "../components/forms/booking";
import Register from "../components/forms/registration";

export default function Home() {
  return (
    <div className="main">
      <Login />
      <br />
      <Booking />
      <br />
      <Register />
    </div>
  );
}
