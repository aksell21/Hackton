import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import Login from "../components/login/Login"
export default function Home() {

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <Login/>
      </div>
    </div>
  );
}
