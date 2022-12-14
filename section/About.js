import Image from 'next/image'
import Heading from '../components/Heading'
import aboutStyles from '../styles/section/About.module.css'
import { motion } from "framer-motion"
import { animateIn } from '../components/Animation'
import { useScroll } from '../components/useScroll'

const About = () => {
    const [element, controls] = useScroll()
    return (
        <section id='about-me' ref={element}>
            <Heading title='About Me' />
            <motion.div variants={animateIn} animate={controls} className={aboutStyles.container}>
                <div className={aboutStyles.aboutme}>
                    <div className={aboutStyles.desc}>
                        <p>Hello! My name is Adams Mercy, a frontend developer with over two years of experience designing web applications that are scalable, maintainable and efficient. </p>
                        <p>My experience working with developers at various organisations remotely and on-site has boarden my knowlegde in frontend development and collaboration. Currently looking
                            into building full stack applications using MERN stack. </p>
                        <p>Being a self-taught developer has not been easy so I put into writing some of the challenges I have faced along the way to help other developer scale that level with ease.</p>
                        <p>Here are some of the technologies I work with:</p>
                        <div className={aboutStyles.stack}>
                            <ul className={aboutStyles.stackList}>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>NodeJs</li>
                            </ul>
                            <ul>
                                <li>NextJs</li>
                                <li>TypeScript</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={aboutStyles.img}>
                    <Image
                        src='/images/profile.jpg'
                        width={300}
                        height={400}
                        alt='Profile Picture'
                        className={aboutStyles.profileImg}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default About