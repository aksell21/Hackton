
import Buttons from '../components/buttons/Buttons'
import Header from '../components/header/Header'
import Login from '../components/login/Login'
import Register from '../components/registration/Registration'
import styles from '../styles/Home.module.css'

export default function loginPage() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Login />
            </div>
        </div>
    )
}
