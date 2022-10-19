import styles from "../styles/Home.module.css";
import Registration from "../components/registration/Registration"
import Header from "../components/header/Header"
export default function registration() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Registration />
            </div>
        </div>
    );

}