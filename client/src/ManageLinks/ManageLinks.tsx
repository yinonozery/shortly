import { useEffect, useState } from 'react'
import styles from './ManageLinks.module.css';

interface shortenURL {
    id: string,
    originalUrl: string,
    shortKey: string,
    clickCount: number,
    createdAt: number[], // [YYYY,MM,DD]
    expiresAt: number[], // [YYYY,MM,DD]
}

const ManageLinks = () => {
    const [data, setData] = useState<shortenURL[]>();

    useEffect(() => {
        const fetchingLinks = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/urls`);
                if (res.status === 200) {
                    const data = await res.json();
                    console.log(data);
                    setData(data);
                }
            } catch (error) {
                console.error('Error Occurred');
            }
        }
        fetchingLinks();

    }, []);

    return (
        <div className={styles.linksContainer}>
            <div>
                <p className={styles.title}>URLS</p>
                <ul>
                    {data && data.map((link: shortenURL, index: number) =>
                        <>
                            <li>
                                <div className={styles.checkBox}><input type='checkbox' key={index} /></div>
                                <div className={styles.originalURL}>
                                    <span>{process.env.REACT_APP_API_URL?.slice(7,)}/{link.shortKey}</span>
                                    {link.originalUrl.slice(0, 50)}...
                                    <span>{link.clickCount} Clicks | {link.createdAt[0] + '/' + link.createdAt[1] + '/' + link.createdAt[2]}</span>
                                </div>

                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ManageLinks;