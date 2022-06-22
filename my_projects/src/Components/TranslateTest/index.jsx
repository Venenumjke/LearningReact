import React, {useState, useCallback, useEffect, memo, useRef} from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import style from './style';
let score
let aroundScore

const MOCK_DATA = {
    tree:'дерево',
    grass:'трава',
    mother:'мама',
    father:'папа',
    brother:'брат',
    syringe:'шприц',
    medicine:'лекарство',
    glass:'стекло',
    train:'поезд',
    stomach:'желудок',
    teeth:'зубы',
    hair:'волосы',
    leg:'нога',
}

const keys = Object.keys(MOCK_DATA)
const values = Object.values(MOCK_DATA)

const TranslateTest = memo(() => {
        const [isStart, setIsStart] = useState(false)
        const [status, setStatus] = useState('Нажмите старт для начала теста')
        const [rightTranslate, setRightTranslate] = useState()
        const [inputText, setInputText] = useState('')
        const [count, setCount] = useState(0)
        const [fail, setFail] = useState(0)
        const [scoreArr, setScoreArr] = useState([])
        const focusRef = useRef(null)

        const pushingArray = useCallback(() => {
            setScoreArr([...scoreArr, 5 - fail])
        },[scoreArr, fail])

        const calcScore = useCallback(() => {
                score  = scoreArr.reduce((a, b) => (a + b)) / scoreArr.length
                aroundScore = Math.round(score)
        }, [scoreArr])

        const callPrompt = useCallback(() => {
            setRightTranslate(undefined)
            setCount(0)
            setFail(0)
            setScoreArr([])
            setIsStart(true)
        }, [])

        const onAnswer = useCallback(() => {
            if (inputText.toLowerCase() === values[count]) {
                setRightTranslate(true)
                pushingArray()
                setCount(count + 1)
                setInputText('')
                setFail(0)
            } else {
                setRightTranslate(false)
                setFail(fail + 1)
                setInputText('')
            }
            focusRef.current.focus()
        }, [inputText, count, fail, pushingArray])

        useEffect(() => {
            if (fail >= 3) {
                setCount(count + 1)
                pushingArray()
                setFail(0)
            }
        }, [count, fail, pushingArray])

        useEffect(() => {
            if (count === keys.length) {
                setIsStart(false)
                calcScore()
                onAnswer()
                setStatus(`Тест закончен, ваша оценка ${aroundScore}`)
            }
        }, [count,calcScore,onAnswer ])

        useEffect(() => {
            if (isStart) {
                setStatus(`Переведите слово ${keys[count]}`)
                if (count >= 1 && count < keys.length) {
                    setStatus(`Переведите слово ${keys[count]}`)
                }
            }
        }, [status, isStart, rightTranslate,count,onAnswer])
        return (
            <div style={style.container}>
                <div style={style.startDiv}>
                    <p style={style.tittle}>
                        Тест на знание слов
                    </p>
                    <Button disabled={isStart ? true : false} onClick={callPrompt} text={'Старт'}/>
                </div>
                <div style={style.container_input}>
                    <Input
                        ref={focusRef}
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                    />
                    <Button disabled={isStart ? false : true} onClick={onAnswer} text={'Ввод'}/>
                </div>
                <div style={style.status}>
                    <h3>{status}</h3>
                </div>
                {isStart && rightTranslate !== undefined &&(
                    <div style={style.status}>
                        <h3 style={style.statusText}>{rightTranslate ? 'Good' : 'Bad'}</h3>
                        <h4 style={style.statusText}>{rightTranslate ? 'next word' : 'try again'}</h4>
                    </div>
                )}
            </div>
        )
    }
)

export default TranslateTest
