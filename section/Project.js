import { useState } from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import projStyles from '../styles/section/Project.module.css'
import Button from '../components/Button'
import Airbnb from '../public/images/Airbnb.png'
import luxe from '../public/images/luxe.png'
import tastyHome from '../public/images/tastyHome.png'
import todo from '../public/images/todo.png'
import goOnline from '../public/images/aboutGoOnline.png'
import addtocart from '../public/images/addtocart.png'
import { BsGithub } from 'react-icons/bs'
import ProjDetailOnHover from '../components/ProjDetailOnHover'
import Articles from '../components/Articles'

const projects = [
    {
        id: 1,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can ask questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: addtocart
    },
    {
        id: 2,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can ask questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: goOnline
    },
    {
        id: 3,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can ask questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: tastyHome
    },
    {
        id: 4,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can ask questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: luxe
    },
    {
        id: 5,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can ask questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: todo
    },
    {
        id: 6,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can ask questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: Airbnb
    },
]

const Project = () => {
    const [showOnHover, setShowOnHover] = useState(false)
    const [projId, setProjId] = useState(null)

    // const delay = (id) => {
    //     console.log('setting delay')
    //     setTimeout(() => { handleHover(id), 5000 })
    // }

    const handleHover = (id) => {
        // console.log('setting delay')
        setShowOnHover(true)
        setProjId(id)
    }
    const handleRemove = () => {
        setShowOnHover(false)
        setProjId(null)
    }
    return (
        <section>
            <Heading title='Some of my Projects' />
            <div className={projStyles.proj}>
                {projects.map(project => (
                    <div className={projStyles.projItem} key={project.id} onMouseOver={() => handleHover(project.id)} onMouseOut={() => handleRemove(project.id)}>
                        <div>
                            <Image
                                src={project.projectImage}
                                className={projStyles.img}
                            />
                            <div className={projStyles.projDetails}>
                                <h4>{project.name}</h4>
                                <div className={projStyles.stack}>
                                    {project.stack.map((stacks, index) => (
                                        <span key={index}>{stacks}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {project.id === projId ? <ProjDetailOnHover projects={projects} show={showOnHover} id={projId} /> : null}
                    </div>
                ))}
            </div>
            <div className={projStyles.projMobile}>
                {projects.map(project => (
                    <div className={projStyles.projItem} key={project.id}>
                        <Image
                            src={project.projectImage}
                            className={projStyles.img}
                        />
                        <div className={projStyles.projDetails}>
                            <div className={projStyles.gitTitle}>
                                <h4>{project.name}</h4>
                                <Link href={project.link}>
                                    <a target='_blank' className={projStyles.link}><BsGithub /></a>
                                </Link>
                            </div>
                            <div className={projStyles.stack}>
                                {project.stack.map((stacks, index) => (
                                    <span key={index}>{stacks}</span>
                                ))}
                            </div>
                            <p>{project.details}</p>
                            <Link href={project.link}>
                                <a target='_blank' className={projStyles.link}>
                                    <Button text='View Project' link='true' />
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2 className={projStyles.articlesHead}>Articles Written</h2>
                <Articles />
            </div>
        </section>
    )
}

export default Project