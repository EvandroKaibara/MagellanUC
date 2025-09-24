import styles from './Partners.module.css'

export const Partners = () => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Partner Companies</h2>
            </div>
            <div className={styles.logos}>
                <a href="https://www.magellangroup1.com/" target="_blank"><img src="/imgs/Magellan Logo.png" alt="Magellan Group Logo" /></a>
                <a href="https://www.amtbusinessllc.com/" target="_blank"><img src="/imgs/AMT Logo.png" alt="AMT Business Logo" /></a>
                <a href="https://www.blueoceancom.net/" target="_blank"><img src="/imgs/BO Logo.png" alt="BlueOcean Logo" /></a>
                <a href="https://www.a3mechanic.com/" target="_blank"><img src="/imgs/A3 Logo.png" alt="A3 Mechanic Logo" /></a>
                <a href="https://elitechuc.com/" target="_blank"><img src="/imgs/Elitech Logo.png" alt="Elitch UC Logo" /></a>
            </div>
        </div>
    )
}