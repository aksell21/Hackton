import Header, { HeaderLoged } from "../components/header/Header"
import styles from "../styles/Home.module.css";
import Login from "../components/login/Login"
export default function Home() {

  return (
    <div>
      <HeaderLoged />
      <div className={styles.container}>
        <Login />
      </div>
    </div>
  );
}
