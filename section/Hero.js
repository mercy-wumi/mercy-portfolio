import Button from "../components/Button"
import heroStyles from '../styles/section/Hero.module.css'
import Social from "../components/Social"

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div>
                <h1 className={heroStyles.heading}>
                    <span className={heroStyles.salute}>Hi, I'm</span>
                    <span>Adams Mercy,</span>
                    <span>Web Developer,</span>
                </h1>
                <p className={heroStyles.intro}>A self-taught developer with over two years experience in frontend development. Currently, transitioning into full-stack development.</p>
                <Button text='Contact Me!' />
            </div>
            <div className={heroStyles.socialLinks}><Social row='true' /></div>

        </section>
    )
}

export default Hero