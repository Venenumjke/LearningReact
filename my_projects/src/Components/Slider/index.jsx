import React from 'react'
import SliderItem from '../SliderItem'
import Button from '../UI/Button'
import styles from './styles'

const slideArray = [
    '../ex2/images/img1.avif',
    '../ex2/images/img2.avif',
    '../ex2/images/img3.avif',
    '../ex2/images/img4.avif',
    '../ex2/images/img5.avif',
    '../ex2/images/img6.avif',
    '../ex2/images/img7.avif',
]

const Slider = () => {

    slideArray.forEach(i => {
        return  console.log();
    })

    return (
    <main style={styles.main}>
        <Button/>
        <SliderItem/>
        <Button/>
    </main>
    )

}

export default Slider

