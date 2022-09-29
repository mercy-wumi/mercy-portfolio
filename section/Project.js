import { useState } from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import projStyles from '../styles/section/Project.module.css'
import Button from '../components/Button'
import Airbnb from '../public/images/Airbnb.png'
import EG from '../public/images/EG.png'
import { BsGithub } from 'react-icons/bs'
import ProjDetailOnHover from '../components/ProjDetailOnHover'
import Articles from '../components/Articles'

const projects = [
    {
        id: 1,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: EG
    },
    {
        id: 2,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: EG
    },
    {
        id: 3,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: EG
    },
    {
        id: 4,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: EG
    },
    {
        id: 5,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: EG
    },
    {
        id: 6,
        name: 'CodeOverFlow MERN APP',
        stack: ['React', 'NodeJs', 'MongoDB', 'Express'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        github: 'https://github.com/mercy-wumi/codeoverflow',
        link: 'https://codeoverflow.netlify.app',
        projectImage: EG
    },
]

const Project = () => {
    const [showOnHover, setShowOnHover] = useState(false)
    const [projId, setProjId] = useState(null)

    const handleHover = (id) => {
        setShowOnHover(true)
        setProjId(id)
    }
    const handleRemove = () => {
        setShowOnHover(false)
        setProjId(null)
    }
    return (
        <section>
            <div className={projStyles.proj}>
                <Heading title='My Works' />
                {projects.map(project => (
                    <div className={projStyles.projItem} key={project.id} onMouseOver={() => handleHover(project.id)} onMouseOut={() => handleRemove(project.id)}>
                        <div>
                            <Image
                                src={project.projectImage}
                                className={projStyles.img}
                            />
                            <div className={projStyles.projDetails}>
                                <div className={projStyles.gitTitle}>
                                    <span>{project.name}</span>
                                    <BsGithub />
                                </div>
                                <div className={projStyles.stack}>
                                    {project.stack.map(stacks => (
                                        <span>{stacks}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {project.id === projId ? <ProjDetailOnHover projects={projects} show={showOnHover} id={projId} /> : null}
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