import Link from 'next/link'
import Button from './Button'
import navStyles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.logo}>
                <span>AM</span>
            </div>
            <div className={navStyles.menu}>
                <ul>
                    <li> <a href='/about'>About</a></li>
                    <li><a href='/Skillsandexperience'>Skills and Experience</a></li>
                    <li><a href='/project'>Project</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
                <Button text='Resume' />
            </div>
        </nav>
    )
}

export default Navbar