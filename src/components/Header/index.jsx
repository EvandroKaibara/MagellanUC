import { Banner } from '../Banner'
import styles from './Header.module.css'

export const Header = () => {
    return(
        <>
        <header className={styles.header}>
            <img src="/imgs/Logo.png" alt="" />
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#company'>Company</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </nav>
            
        </header>
        <Banner />
        </>
    )
}