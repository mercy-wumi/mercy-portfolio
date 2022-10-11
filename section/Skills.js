import { useState } from 'react'
import Experience from '../components/Experience'
import Heading from '../components/Heading'
import skillStyles from '../styles/section/Skills.module.css'

const works = [
    {
        id: 1,
        jobTitle: 'Freelancer',
        company: 'Freelancing',
        date: 'May 2022 - Present',
        jobDesc: [
            'Write modern, efficient and scalable to create landing pages',
            'Working on fullstack application using MERN stack app. Created a stackoverflow clone app with basic functionalities',
            'Created a simple ecommerce product detail page where users can view product item images and add item to cart'
        ]
    },
    {
        id: 2,
        jobTitle: 'Frontend Developer',
        company: 'DigiScript',
        date: 'Nov 2021 - April 2022',
        jobDesc: [
            'Developed user interface codes that are scalable, reusable and efficient using ReactJs',
            'Reviewed other team members code for better performance and optimization',
            'Collaborated on building a blockchain MVP app with team members'
        ]
    },
    {
        id: 3,
        jobTitle: 'Frontend Developer',
        company: 'Ohealth',
        date: 'Nov 2020 - Aug 2021',
        jobDesc: [
            'Redesigned the existing company’s website ',
            'Created company’s web application which is a replica of the mobile app thereby providing dual options to user accessing services rendered by the company using ReactJs, Rest Api, Material UI',
            'Implemented web pages for laboratory registered with the company to be able to track user booking for Covid test from the company’s mobile application thereby increasing the company’s revenue by 30%'
        ]
    }
]

const Skills = () => {
    const [workToDisplay, setWorkToDisplay] = useState(works[0])

    const handleClick = (id) => {
        setWorkToDisplay(works[id - 1])
        console.log(id)
    }
    return (
        <section id='skill'>
            <Heading title='Work Experience' />
            <div className={skillStyles.skills}>
                <ul className={skillStyles.work}>
                    {works.map(work => (
                        <li onClick={() => handleClick(work.id)} key={work.id} className={`${workToDisplay.id === work.id ? skillStyles.clicked : ''}`}>{work.company}</li>
                    ))}
                </ul>
                <Experience works={workToDisplay} />
            </div>
        </section>
    )
}

export default Skills