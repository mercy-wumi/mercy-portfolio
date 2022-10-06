import Image from 'next/image'
import profile from '../public/images/profile.jpg'
import Heading from '../components/Heading'
import aboutStyles from '../styles/section/About.module.css'

const About = () => {
    return (
        <section>
            <Heading title='About Me' />
            <div className={aboutStyles.container}>
                <div className={aboutStyles.aboutme}>
                    <div className={aboutStyles.desc}>
                        <p>Hello! My name is Adams Mercy, a frontend developer with over two years of experience designing web applications that are scalable, maintainable and efficient. </p>
                        <p>My experience working with developers at various organisations remotely and on-site has boarden my knowlegde in frontend development and collaboration. Currently looking
                            into building full stack applications using MERN stack. </p>
                        <p>Being a self-taught developer has not been easy so I put into writing some of the challenges I have faced along the way to help other developer scale that level with ease.</p>
                        <p>Here are some of the technologies I work with:</p>
                        <div className={aboutStyles.stack}>
                            <ul>
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
                        src={profile}
                        width='300px'
                        height='400px'
                        className={aboutStyles.profileImg}
                    />
                </div>
            </div>
        </section>
    )
}

export default About