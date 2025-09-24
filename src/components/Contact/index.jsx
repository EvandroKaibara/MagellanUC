import { Typography } from '../Typography'
import styles from './Contact.module.css'

export const Contact = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Contact</h2>
            <div>
                <div className={styles.text}>
                    <Typography variant = "h3">
                        Address
                    </Typography>
                    <Typography variant = "body"/>
                        3479 PARKWAY CENTER CT , bd. 608. Orlando, FL.
                    <Typography />
                    <Typography variant = "h3">
                        Telephone
                    </Typography>
                    <Typography variant = "body">
                        +1 (407) 923-2497
                    </Typography>
                </div>
            </div>
        </div>
    )
}