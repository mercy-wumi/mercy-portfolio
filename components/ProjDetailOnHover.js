import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button'
import projStyles from '../styles/section/Project.module.css'
import { BsGithub } from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from '../components/Animation'
import { useScroll } from '../components/useScroll'


const ProjDetailOnHover = ({ projects, show, id }) => {
    const hoverToShow = projects.find(project => project.id === id);
    const [element, controls] = useScroll()

    return (
        <motion.div ref={element} variants={fadeIn} animate={controls} className={`${projStyles.projEnlarge} ${show ? projStyles.projEnlargeShow : projStyles.projEnlargeHide}`}>
            <Image
                src={hoverToShow.projectImage}
                className={projStyles.projImg}
                alt='Project'
            />
            <div className={projStyles.projDetails}>
                <div className={projStyles.gitTitle}>
                    <h4>{hoverToShow.name}</h4>
                    <Link href={hoverToShow.github}>
                        <a target='_blank' className={projStyles.github}><BsGithub /></a>
                    </Link>
                </div>
                <p>{hoverToShow.details}</p>
                <Link href={hoverToShow.link}>
                    <a target='_blank' className={projStyles.link}>
                        <Button text='View Project' link='true' />
                    </a>
                </Link>
            </div>
        </motion.div>
    )
}

export default ProjDetailOnHover