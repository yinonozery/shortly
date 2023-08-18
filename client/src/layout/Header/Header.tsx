import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg'
import { useEffect, useState } from 'react';
import menuIcon from '../../assets/images/menu.svg';
import closeMenuIcon from '../../assets/images/menu-close.svg';

interface navTitle {
    label: string,
    url: string
}

const Header = () => {
    const navTitles: navTitle[] = [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Resources', url: '#' }
    ]

    const [nav, setNav] = useState<boolean>(false);

    useEffect(() => {
        document.documentElement.style.overflow = nav ? 'hidden' : 'auto';
    }, [nav]);

    return (
        <nav className={styles.header}>
            <a href="/"><img src={logo} alt='' /></a>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : styles.menu}>
                {navTitles.map((title: navTitle, index: number) => <li key={index}><a href={title.url}>{title.label}</a></li>)}
                <div className={styles.login}>
                    <li><a href='/#'>Login</a></li>
                    <button>Sign Up</button>
                </div>
            </ul>
            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                <img src={nav ? closeMenuIcon : menuIcon} alt='Menu' />
            </div>
        </nav>
    )
}

export default Header;