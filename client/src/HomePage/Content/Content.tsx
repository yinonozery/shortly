import styles from './Content.module.css';
import br from '../../assets/images/icon-brand-recognition.svg';
import dr from '../../assets/images/icon-detailed-records.svg';
import fc from '../../assets/images/icon-fully-customizable.svg';

const Content = () => {
    return (
        <div className={styles.content}>
            <h2>Advanced Statistics</h2>
            <span className={styles.description}>
                Track how your links are performing across the web with out advanced statistics dashboard.
            </span>
            <div className={styles.boxesContainer}>
                <div className={styles.box}>
                    <span className={styles.icon} style={{ backgroundImage: `url(${br})` }}></span>
                    <div className={styles.textArea}>
                        <span>Brand Recognition</span>
                        <p>
                            Boost your brand recognition with each click. Generic links don't mean a think. Branded links help instil confidence in your content.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.icon} style={{ backgroundImage: `url(${dr})` }}></span>
                    <div className={styles.textArea}>
                        <span>Detailed Records</span>
                        <p>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.icon} style={{ backgroundImage: `url(${fc})` }}></span>
                    <div className={styles.textArea}>
                        <span>Fully Customizable</span>
                        <p>
                            Improve brand awareness and content discoverability through cusomizable links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;