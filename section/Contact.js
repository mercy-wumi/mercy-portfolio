import { useState } from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import contactStyles from '../styles/section/Contact.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import { animateIn } from '../components/Animation'
import { useScroll } from '../components/useScroll'


const Contact = () => {
    const [element, controls] = useScroll()
    const messageSent = () => toast.success("Thank you for your message, I will be in touch soon!");

    const errorMessage = () => toast.error("Opps! an error occured.");

    const fillInputs = () => toast.warn("Please fill in all fields.");

    const emailWarning = () => toast.warn("Enter a correct email address.");

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && email && subject && message) {
            if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                return emailWarning()
            }
            const serviceId = 'service_x4oofmw'
            const templateId = 'template_yiwgljg'
            const publicKey = 'user_oXuP7LsHXeFy1OwhOog8w'
            const templateParams = {
                name,
                email,
                subject,
                message
            }


            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(response => {
                    console.log(response)
                    messageSent()
                })
                .catch(error => {
                    console.log(error)
                    errorMessage()
                })

            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }
        else {
            fillInputs()
        }
    }


    return (
        <section id='contact'>
            <Heading title='Contact Me' />
            <motion.div ref={element} variants={animateIn} animate={controls} className={contactStyles.contact}>
                <h4 className={contactStyles.getInTouch}>Get in Touch</h4>
                <p>Open to Frontend and Junior smart contract developer role. However, if you have any request or question, do reach out using the form.</p>
                <form className={contactStyles.form} onSubmit={handleSubmit}>
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
                            onChange={(e) => setEmail(e.target.value)}
                            className={contactStyles.input}
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={contactStyles.input}
                    />
                    <textarea
                        type='text'
                        placeholder='Message'
                        value={message}
                        rows='10'
                        onChange={(e) => setMessage(e.target.value)}
                        className={contactStyles.message}
                    >
                    </textarea>
                    <Button text='Send Message!' />
                </form>
            </motion.div>
            <ToastContainer />
        </section>
    )
}

export default Contact