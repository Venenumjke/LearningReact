import React, {useCallback, useEffect, memo} from 'react'
import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

import './styles.css'


const MOCK_DATA = {
    tree:'дерево',
    grass:'трава',
    glass:'стекло',
    mother:'мама',
    father:'папа',
    sister:'сестра',
    brother:'брат',
    jackal:'шакал',
}

const TranslateTest = memo(() => {

        const keys = Object.keys(MOCK_DATA)
        const values = Object.values(MOCK_DATA)

        const [isStart, setIsStart] = useState(false)
        const [status, setStatus] = useState('Нажмите старт для начала теста')
        const [rightTranslate, setRightTranslate] = useState(false)
        const [answer, setAnswer] = useState('')

        const callPrompt = useCallback(() => {
            setIsStart(true)
        }, [])

        const onAnswer = useCallback(() => {
            if (answer.toLowerCase() === values[0]) {
                setRightTranslate(true)
            } else {
                setRightTranslate(false)
            }
        }, [status, answer])

        useEffect(() => {
            if (isStart) {
                setStatus(`Переведите слово ${keys[0]}`)
                if (rightTranslate) {
                    setStatus(`Переведите слово ${keys[1]}`)
                }
            }
        }, [status, isStart, rightTranslate])

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
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                    />
                    <Button onClick={onAnswer}>Ввод</Button>
                </div>
                <div className='status'>
                    <h3>{status}</h3>
                </div>
                {isStart && (
                    <div className='status'>
                        <h3>{rightTranslate ? 'Good' : 'Bad'}</h3>
                    </div>
                )}
            </div>
        )
    }
)

export default TranslateTest
