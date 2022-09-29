import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button'
import projStyles from '../styles/section/Project.module.css'
import EG from '../public/images/EG.png'


const ProjDetailOnHover = ({ projects, show, id }) => {
    const hoverToShow = projects.find(project => project.id === id);
    console.log(hoverToShow)

    return (
        <div className={`${projStyles.projEnlarge} ${show ? projStyles.projEnlargeShow : projStyles.projEnlargeHide}`}>
            <Image
                src={hoverToShow.projectImage}
                className={projStyles.projImg}
            />
            <div className={projStyles.projDetails}>
                <h4>{hoverToShow.name}</h4>
                <p>{hoverToShow.details}</p>
                <Link href={hoverToShow.link}>
                    <a className={projStyles.link}>
                        <Button text='View Project' link='true' />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ProjDetailOnHover