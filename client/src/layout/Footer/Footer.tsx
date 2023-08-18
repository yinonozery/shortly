import styles from './Footer.module.css';
import whiteLogo from '../../assets/images/whitelogo.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import pinterestIcon from '../../assets/images/icon-pinterest.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';

type Category = {
    title: string,
    list: { label: string, url: string }[]
}

type SocialMedia = {
    icon: string,
    url: string,
    alt: string,
}

const Footer = () => {

    const cat_1: Category = {
        title: 'Features',
        list: [
            {
                label: 'Link Shortening',
                url: '#',
            },
            {
                label: 'Branded Links',
                url: '#',
            },
            {
                label: 'Analytics',
                url: '#',
            }
        ]
    }

    const cat_2: Category = {
        title: 'Resources',
        list:
            [
                {
                    label: 'Blog',
                    url: '#',
                },
                {
                    label: 'Developers',
                    url: '#',
                },
                {
                    label: 'Support',
                    url: '#',
                }
            ]
    }

    const cat_3: Category = {
        title: 'Company',
        list:
            [
                {
                    label: 'About',
                    url: '#',
                },
                {
                    label: 'Our Team',
                    url: '#',
                },
                {
                    label: 'Careers',
                    url: '#',
                },
                {
                    label: 'Contant',
                    url: '#',
                }
            ]
    }

    const categories: Category[] = [cat_1, cat_2, cat_3]

    const socialMedia: SocialMedia[] = [
        {
            icon: facebookIcon,
            url: 'https://www.facebook.com',
            alt: 'Facebook'
        },
        {
            icon: twitterIcon,
            url: 'https://www.twitter.com',
            alt: 'Twitter'
        },
        {
            icon: pinterestIcon,
            url: 'https://www.pinterest.com',
            alt: 'Pinterest'
        },
        {
            icon: instagramIcon,
            url: 'https://www.instagram.com',
            alt: 'Instagram'
        },
    ]

    return (
        <footer className={styles.footer} >
            <img src={whiteLogo} alt="Shortly" className={styles.logo} />
            <div className={styles.siteMap}>
                {categories.map((cat: Category, index: number) =>
                    <div className={styles.catMap} key={index}>
                        <h3>{cat.title}</h3>
                        <ul>
                            {cat.list.map((link, index: number) => {
                                return (
                                    <li key={index}><a href={link.url}>{link.label}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.socialMedia}>
                {socialMedia.map((social: SocialMedia, index: number) =>
                    <span key={index}><a href={social.url}><img src={social.icon} alt={social.alt} /></a></span>)}
            </div>
        </footer>
    )
}

export default Footer;