import React, { useState, useEffect } from 'react'
import Straight from './CharsImgs/Normal-girl-2.png'
import Happy from './CharsImgs/Happy-girl-2.png'

const Char2 = (Expression, Name) => {
    const [currentCharImg, setCurrentCharImg] = useState()
    const [charName, setCharName] = useState('Menina 2')

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
        <div className="Personagem Char2">
            <img src={currentCharImg} alt="Char2" />
        </div>
    )
}

export default Char2
