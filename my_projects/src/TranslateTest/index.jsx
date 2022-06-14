import React from 'react'
import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import './styles.css'


const TranslateTest = function ({...props}) {

    const dB = {
        'tree':'дерево',
        'grass':'трава',
        'glass':'стекло',
        'mother':'мама',
        'father':'папа',
        'sister':'сестра',
        'brother':'брат',
        'jackal':'шакал'
    }
    const keys = Object.keys(dB)
    const values = Object.values(dB)

    const [status, setStatus] = useState('Нажмите старт для начала теста')
    const [ans, setAns] = useState('')
    function callPrompt() {
        setStatus(`Переведите слово ${keys[0]}`)
    } 

    function answer (e) {
        e.preventDefault()
        const otvet = ans
        if (otvet.toLowerCase() == values[0]) {
            setStatus('good')
        } else {
            setStatus('bad')
        }
       setAns('')
    }

    return (
        <div className='container'> 
            <div className="startDiv">
                <p className="tittle">
                    Тест на знание слов
                </p>
                <Button onClick={callPrompt}> 
                Старт
                </Button>
            </div>
            <div className='container_input'>
                <Input
                value={ans}
                onChange={e => setAns(e.target.value)}
                />
                <Button onClick={answer}>Ввод</Button>
            </div>
            <div className='status'>
                <h3>{status}</h3>
            </div>
        </div>
    )

}

export default TranslateTest