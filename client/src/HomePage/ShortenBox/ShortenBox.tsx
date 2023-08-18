import { useRef, useState } from 'react'
import styles from './ShortenBox.module.css'
import copy from '../../assets/images/copy.svg';

const ShortenBox = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const shortRef = useRef<HTMLInputElement | null>(null)
    const [fetching, setFetching] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');

    const isValidURL = (url: string) => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlPattern.test(url);
    }

    const copyURL = () => {
        // Copy shorten url to clipboard
        if (!shortRef.current) return;
        shortRef?.current?.select();
        shortRef?.current?.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(shortRef?.current?.value);
    }

    const shortenURL = () => {
        const inputElement = inputRef?.current;
        setResult('');

        // Prevent multiple requests
        if (fetching)
            return;

        if (!inputElement?.value) {
            // Empty string
            inputElement?.classList.add(styles.glowRed);
        } else if (isValidURL(inputElement?.value)) {
            inputElement.classList.remove(styles.glowRed);
            setFetching(true);
            fetch(`${process.env.REACT_APP_API_URL}/shorten`, {
                method: 'POST',
                body: JSON.stringify({
                    originalUrl: inputElement.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.text())
                .then((data) => {
                    setResult(process.env.REACT_APP_API_URL + '/' + data);
                    inputElement.classList.remove(styles.glowRed); // Remove error styling
                })
                .catch((error) => {
                    inputElement.classList.add(styles.glowRed);
                    setResult("Internal Error Occurred, try again.");
                }).finally(() => setFetching(false));
        } else {
            setResult("Enter a valid URL")
        }
    }

    return (
        <>
            <div className={styles.shortenBox}>
                <input type='url' placeholder='Shorten a link here...' ref={inputRef} />
                <button onClick={shortenURL}>Shorten It!</button>
            </div>

            <div className={`${styles.result} ${result ? styles.fadeIn : ''}`} >
                <input value={result} ref={shortRef} disabled />
                <img src={copy} alt='Copy' width={20} onClick={copyURL} />
            </div>
        </>
    )
}

export default ShortenBox;