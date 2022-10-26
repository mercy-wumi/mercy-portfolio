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
    }

    // const download = () => {
    //     console.log('download')
    //     const URL = 'http://dynamic-link.com/sample.xlsx'
    //     if (typeof window !== "undefined") {
    //         window.location.href = URL
    //     }
    // }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })


    const handleToggle = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <nav className={`${navStyles.nav} ${pageHeight > 10 ? navStyles.scrolled : ''}`}>
            <div className={navStyles.logo}>
                <Link href='/'>
                    <a><span>AM</span></a>
                </Link>
            </div>
            <div className={`${mobileNav ? navStyles.mobile : navStyles.menu}`}>
                <ul>
                    <li>
                        <a
                            href='#about-me'
                            onClick={e => {
                                let about = document.getElementById('about-me');
                                e.preventDefault()
                                about && about.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>About</a>
                    </li>
                    <li>
                        <a
                            href='#skill'
                            onClick={e => {
                                let skill = document.getElementById('skill');
                                e.preventDefault()
                                skill && skill.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>Skills and Experience</a>
                    </li>
                    <li>
                        <a
                            href='#project'
                            onClick={e => {
                                let project = document.getElementById('project');
                                e.preventDefault()
                                project && project.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>
                            Project</a>
                    </li>
                    <li>
                        <a
                            href='#contact'
                            onClick={e => {
                                let contact = document.getElementById('contact');
                                e.preventDefault()
                                contact && contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}>
                            Contact</a>
                    </li>
                </ul>
                <Link href='https://drive.google.com/file/d/1fUK9IypS0D6Rc0Eb_OGffa0T2Xqbhlfq/view?usp=sharing'>
                    <a target='_blank' rel="noopener noreferrer">
                        <Button text='Resume' link='true' />
                    </a>
                </Link>
                {/* <Button click={download} text='Resume' /> */}
            </div>
            <div className={navStyles.mobileMenu} onClick={handleToggle}>
                {mobileNav ? <CgClose /> : <HiMenuAlt2 />}
            </div>
        </nav >
    )
}

export default Navbar