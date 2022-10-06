import Social from "../components/Social"
import footerStyles from '../styles/section/footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.footer}>
                <span>Crafted by <span className={footerStyles.crafted}>Adams Mercy</span></span>
                <Social row='false' />
            </div>
        </footer>
    )
}

export default Footer