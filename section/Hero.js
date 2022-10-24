import React, { useEffect } from "react"
import Button from "../components/Button"
import heroStyles from '../styles/section/Hero.module.css'
import Social from "../components/Social"
import { motion } from "framer-motion"


const Hero = () => {

    return (
        <motion.section className={heroStyles.hero}
            initial={{ y: 30, opacity: 0 }}
            animate={{
                y: 0, opacity: 1, transition: {
                    duration: 0.5
                }
            }
            }
        >
            <div>
                <h1 className={heroStyles.heading}>
                    <span className={heroStyles.salute}>Hi, I'm</span>
                    <span>Adams Mercy,</span>
                    <span>Web Developer,</span>
                </h1>
                <p className={heroStyles.intro}>A self-taught developer with over two years experience in frontend development. Currently, transitioning into full-stack development.</p>
                <a
                    href='#contact'
                    onClick={e => {
                        let about = document.getElementById('contact');
                        e.preventDefault()
                        about && about.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}>
                    <Button text='Contact Me!' />
                </a>

            </div>
            <div className={heroStyles.socialLinks}><Social row='true' /></div>
        </motion.section>
    )
}

export default Hero