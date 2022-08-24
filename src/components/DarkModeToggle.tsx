import styles from  './DarkModeToggle.module.css';
import Image from 'next/image';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeToggle(props: any) {
    return (
    <>
                {/* Conditionally render className (Toggle styling) depending on mode prop */}
                <div className={props.mode ==='light'? styles.toggle: styles.toggleOn}> 
                    <Image src="/moon.svg" alt="moon" width={20} height={20}/>
                    <Image src="/sun.svg" alt="sun" width={20} height={20}/>

                    {/* Ball inside of toggle, moves position depending on mode prop via CSS class*/}
                    <div className={props.mode ==='light'?  styles.ballRight : styles.ball}/>
            </div>
    </>
    )
}
