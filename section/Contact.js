import { useState } from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import contactStyles from '../styles/section/Contact.module.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    return (
        <section id='contact'>
            <Heading title='Contact Me' />
            <div className={contactStyles.contact}>
                <h4 className={contactStyles.getInTouch}>Get in Touch</h4>
                <p>I’m interested in full time, freelance opportunities. However, if you have any request or question, do reach out using the form.</p>
                <form className={contactStyles.form}>
                    <div className={contactStyles.nameEmail}>
                        <input
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={contactStyles.input}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setName(e.target.value)}
                            className={contactStyles.input}
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setName(e.target.value)}
                        className={contactStyles.input}
                    />
                    <textarea
                        type='text'
                        placeholder='Message'
                        value={message}
                        rows='10'
                        onChange={(e) => setName(e.target.value)}
                        className={contactStyles.message}
                    >
                    </textarea>
                    <Button text='Send Message!' />
                </form>
            </div>
        </section>
    )
}

export default Contact