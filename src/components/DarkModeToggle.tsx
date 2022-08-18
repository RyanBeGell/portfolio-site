import styles from  './DarkModeToggle.module.css';
import Image from 'next/image';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeToggle() {
    return (
    <>
        <div>
            <input type="checkbox" className={styles.checkbox} id={styles.chk} />
            <label className={styles.label} htmlFor="chk">
                <Image src="/moon.svg" alt="moon" width={20} height={20}/>
                <Image src="/sun.svg" alt="sun" width={20} height={20}/>
                <div className={styles.ball}> </div>
            </label>
        </div>
    </>
    )
}
