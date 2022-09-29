import Button from "../components/Button"
import heroStyles from '../styles/section/Hero.module.css'
import Social from "../components/Social"

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div>
                <h1>
                    <span className={heroStyles.salute}>Hi, I'm</span>
                    <p>Adams Mercy,</p>
                    <p>Web Developer,</p>
                </h1>
                <p className={heroStyles.intro}>A self-taught developer with over two years experinece in frontend development. Currently, transitioning into full-stack development.</p>
                <Button text='Contact Me!' />
            </div>
        </section>
    )
}

export default Hero