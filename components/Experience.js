import skillStyles from '../styles/section/Skills.module.css'

const Experience = ({ works }) => {
    console.log(works)
    return (
        <div className={skillStyles.experience}>
            <h5>{works.jobTitle}<span> @ {works.company}</span></h5>
            <p>{works.date}</p>
            <ul>
                {works.jobDesc.map((workDesc, index) => (
                    <li key={index}>{workDesc}</li>
                ))}
            </ul>
        </div>
    )
}

export default Experience