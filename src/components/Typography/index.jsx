import styles from './Typography.module.css'

const TAGS = {
    h3: 'h3',
    body: 'p'
}

export const Typography = ({ children, variant }) =>{

    const Component = TAGS[variant] || 'p'
    const variantClass = styles[variant] || styles.p

    return(
        <Component className={variantClass}>
            {children}
        </Component>
    )
}