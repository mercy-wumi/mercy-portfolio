import React from 'react'
import btnStyles from '../styles/components/Button.module.css'
const Button = ({ text }) => {
    return (
        <button className={btnStyles.button}>{text}</button>
    )
}

export default Button