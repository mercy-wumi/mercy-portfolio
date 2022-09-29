import Navbar from './Navbar'
import styles from '../styles/components/Layout.module.css'
import Hero from '../section/Hero'
import About from '../section/About'
import Social from './Social'
import Project from '../section/Project'
import Skills from '../section/Skills'
import Contact from '../section/Contact'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            {/* <Social /> */}
            <main className={styles.main}>
                <Hero />
                <About />
                <Project />
                <Skills />
                <Contact />
                {children}
            </main>
        </div>
    )
}

export default Layout