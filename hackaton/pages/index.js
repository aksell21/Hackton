import Buttons from "../components/buttons/Buttons";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div>
      <Header/>
      <div className={styles.container}></div>
    </div>
  );
}
