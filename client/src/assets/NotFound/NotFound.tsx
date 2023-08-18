import { useNavigate } from 'react-router-dom';
import NotFound404 from '../../assets/images/NotFound404.svg';
import styles from './NotFound.module.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.notFoundBox}>
            <img src={NotFound404} alt='404 Not Found' height="300" />
            <h1>Not Found</h1>
            <button onClick={() => navigate('/')}>Return to the Home Page</button>
        </div>
    )
}

export default NotFound;