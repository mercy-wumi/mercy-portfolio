import React from 'react'
import btnStyles from '../styles/components/Button.module.css'
const Button = ({ text, click }) => {
    return (
        <button onClick={click} className={btnStyles.button}>{text}</button>
    )
}

export default Button