import React from 'react'
import './styles.css'
const Input = (props) => {

    return (
        <input {...props} type="text" placeholder='Введите слово' />
    )

}

export default Input