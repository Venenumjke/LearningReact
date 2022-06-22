import React from 'react'
import styles from './style'


const Button = ({text = 'xx', ...props}) => {

    return (
        <button style={styles.buttonWrapper} {...props} >
            {text}
        </button>
    )

}
export default Button