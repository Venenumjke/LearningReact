import React, { memo, useCallback } from 'react'
import styles from './style'


const Button = memo(({text = '', onPress = () => console.log('Please attach method')}) => {

    const onPressHandle = useCallback(() => {
        onPress()
    },[onPress])

        return (
            <button style={styles.buttonWrapper} onClick={onPressHandle} >
                <p style={styles.buttonText}>{text}</p>
            </button>
        )
    }
)
export default Button
