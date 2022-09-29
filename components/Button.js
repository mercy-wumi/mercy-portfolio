import React from 'react'
import btnStyles from '../styles/components/Button.module.css'
const Button = ({ text, link }) => {
    return (
        <button className={btnStyles.button}>{text}</button>
    )
}

export default Button