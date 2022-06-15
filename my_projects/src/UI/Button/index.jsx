import React from 'react'
import { useCallback } from 'react'
import './styles.css'

const Button = ({text = 'xx', onPress=() => {}}) => {
    
    const onClick = useCallback(() => {
        console.log('Работает onPress');
        onPress()
    }, [] )

    return (
        <button className='buttonWrapper' onClick={onClick} >
            {text}
        </button>
    )

}
export default Button