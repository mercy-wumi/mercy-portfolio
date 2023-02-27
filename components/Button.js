import React from 'react'
import btnStyles from '../styles/components/Button.module.css'
const Button = ({ text, click }) => {
    return (
        <button className={btnStyles.button} onClick={click}>{text}</button>
    )
}

export default Button