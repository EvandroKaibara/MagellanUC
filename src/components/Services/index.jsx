import Card from '../Card'
import styles from './Services.module.css'

export const Services = () => {
    return (
        <section className={styles.section}>
            <p>A company dedicated to optimizing and simplifying administrative processes on underground construction and fiber instalation for businesses like yours. We understand the importance of efficiency in day-to-day operations, and our specialized services are designed to help your company save time and resources. Our key services include:</p>
            <div className={styles.cards}>
                <Card>
                    <Card.Header>
                        Onboarding Process Management
                    </Card.Header>
                    <Card.Body>
                        Ensuring seamless integration of new clients or employees.
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        Customer Engagement & Support
                    </Card.Header>
                    <Card.Body>
                        Handling inquiries and improving client satisfaction.
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        Ticketing System Management
                    </Card.Header>
                    <Card.Body>
                        Efficient tracking and resolution of requests.
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        Billing Package Preparation
                    </Card.Header>
                    <Card.Body>
                        Organizing invoices and financial documentation for accuracy and transparency. By outsourcing these essential tasks to Magellan
                    </Card.Body>
                </Card>
            </div>
            <p>Utilities Consulting, your team can focus on core business operations while we take care of the administrative workload.</p>
        </section>
    )
}