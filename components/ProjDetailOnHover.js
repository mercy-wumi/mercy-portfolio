import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button'
import projStyles from '../styles/section/Project.module.css'
import { BsGithub } from 'react-icons/bs'


const ProjDetailOnHover = ({ projects, show, id }) => {
    const hoverToShow = projects.find(project => project.id === id);
    // console.log(hoverToShow)

    return (
        <div className={`${projStyles.projEnlarge} ${show ? projStyles.projEnlargeShow : projStyles.projEnlargeHide}`}>
            <Image
                src={hoverToShow.projectImage}
                className={projStyles.projImg}
                alt='Project'
            />
            <div className={projStyles.projDetails}>
                <div className={projStyles.gitTitle}>
                    <h4>{hoverToShow.name}</h4>
                    <Link href={hoverToShow.github}>
                        <a target='_blank' className={projStyles.link}><BsGithub /></a>
                    </Link>
                </div>
                <p>{hoverToShow.details}</p>
                <Link href={hoverToShow.link}>
                    <a target='_blank' className={projStyles.link}>
                        <Button text='View Project' link='true' />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ProjDetailOnHover