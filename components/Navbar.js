import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'
import { HiMenuAlt2 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import navStyles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    const [pageHeight, setPageHeight] = useState(null)

    const [mobileNav, setMobileNav] = useState(false)

    const handleScroll = () => {
        setPageHeight(window.scrollY)
        console.log(pageHeight)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })


    const handleToggle = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <nav className={`${navStyles.nav} ${pageHeight > 10 ? navStyles.scrolled : ''}`}>
            {/* <nav className={navStyles.nav}> */}
            <div className={navStyles.logo}>
                <span>AM</span>
            </div>
            <div className={`${mobileNav ? navStyles.mobile : navStyles.menu}`}>
                <ul>
                    <li> <a href='/about'>About</a></li>
                    <li><a href='/Skillsandexperience'>Skills and Experience</a></li>
                    <li><a href='/project'>Project</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
                <Button text='Resume' />
            </div>
            <div className={navStyles.mobileMenu} onClick={handleToggle}>
                {mobileNav ? <CgClose /> : <HiMenuAlt2 />}
            </div>
        </nav>
    )
}

export default Navbar