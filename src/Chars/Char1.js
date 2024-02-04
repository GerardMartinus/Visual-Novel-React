import React, { useState, useEffect } from 'react'
import Straight from './CharsImgs/Normal-girl.png'
import Happy from './CharsImgs/Happy-girl.png'

const Char1 = (Expression, { enviarParaPai }) => {
    const [currentCharImg, setCurrentCharImg] = useState()
    const [charName, setCharName] = useState('Menina 1')

    useEffect(() => {
        switch (Expression.Expression) {
        case 'Happy':
            setCurrentCharImg(Happy)
            break
        default:
            setCurrentCharImg(Straight)
            break
        }
    }, [Expression, setCurrentCharImg, Happy, Straight])


    return (
        <div className="Personagem">
            <img src={currentCharImg} className="Char1" alt="Char1" />
        </div>
    )
}

export default Char1
