import styles from './Company-Description.module.css'

export const CompanyDescription = () => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Magellan Utilities Consulting Achieves Minority Business Certification!</h2>
                <p>Dear Valued Clients. We are thrilled to announce that Magellan Utilities Consulting  (as AMT business and Blue Ocean, a company owned by Magellan Group) has officially been certified as a Minority Business Enterprise (MBE). This important milestone reflects our commitment to fostering diversity, equity, and inclusion in all aspects of our business. This certification allows us to better serve our clients , partners, and communities while supporting supplier diversity initiatives across industries</p>
                <p>As a certified Minority Business, we are proud to contribute to building a more inclusive and equitable business environment. We deeply value the trust and support you have placed in us and look forward to continuing to deliver exceptional service, now with an added focus on promoting meaningful change and diversity. Thank you for being a part of this exciting new chapter with us. Warm regards, Magellan. </p>
            </div>
            <div className={styles.image}>
                <img src="/imgs/Certificate.png" alt="" />
            </div>
        </div>
    )
}