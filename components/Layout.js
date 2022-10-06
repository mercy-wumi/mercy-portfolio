import Navbar from './Navbar'
import styles from '../styles/components/Layout.module.css'
import Hero from '../section/Hero'
import About from '../section/About'
import Project from '../section/Project'
import Skills from '../section/Skills'
import Contact from '../section/Contact'
import Footer from '../section/Footer'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <Hero />
                <About />
                <Project />
                <Skills />
                <Contact />
                <Footer />
                {children}
            </main>
        </div>
    )
}

export default Layout