import {
    useState
} from 'react'
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
            'Design frontend for website',
            'Design frontend for website',
            'Design frontend for website'
        ]
    },
    {
        id: 2,
        jobTitle: 'Freelancer',
        company: 'DigiScript',
        date: 'May 2022 - Present',
        jobDesc: [
            'Design frontend for website',
            'Design frontend for website',
            'Design frontend for website'
        ]
    },
    {
        id: 3,
        jobTitle: 'Freelancer',
        company: 'Ohealth',
        date: 'May 2022 - Present',
        jobDesc: [
            'Design frontend for website',
            'Design frontend for website',
            'Design frontend for website'
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
        <section>
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