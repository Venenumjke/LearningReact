import React from 'react'

function callPrompt() {

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
    let score = []

    for (let index = 0; index < keys.length; index++) {
        const lol = prompt('Переведите слово ' + keys[index])
        if (lol.toLocaleLowerCase() === values[index]){
            alert('Верно')
            score.push(5)
            console.log(score)
        }    else {
            const lol1 = prompt('Переведите слово ' + keys[index])
            if (lol1.toLocaleLowerCase() === values[index]) {
                alert('Верно')
                score.push(4)
                console.log(score)
            } else {
                const lol11 = prompt('Переведите слово ' + keys[index])
                if (lol11.toLocaleLowerCase() === values[index]) {
                    alert('Верно')
                    score.push(3)
                    console.log(score)
                } else {
                    alert('Неправильно, перейдем к следующеми слову')
                    score.push(0)
                }
            }
        }
    } 
    let waw = score.reduce((a, b) => (a + b)) / score.length
    let wawed = Math.round(waw)
    alert('Ваша оценка ' + wawed)
    score.splice(0, 8)
    console.log(score);
} 

const TranslateTest = function ({...props}) {



    return (
        <div className="main_div"> 
        <p className="tittle">
            Тест на знание слов
        </p>
        <button onClick={callPrompt} className="startButton"> 
        Start
        </button>
    </div>
    )
}

export default TranslateTest