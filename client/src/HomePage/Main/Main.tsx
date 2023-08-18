import styles from './Main.module.css'
import working from '../../assets/images/illustration-working.svg';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftMain}>
                <h1>More than just shorter links</h1>
                <h3>Build your brand's recognition and get detailed insights on how your links are performing.</h3>
                <button>Get Started</button>
            </div>
            <img src={working} alt='Illustration Working' className={styles.rightMain} />
        </div>
    )
}

export default Main;