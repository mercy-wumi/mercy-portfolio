import skillStyles from '../styles/section/Skills.module.css'

const Experience = ({ works }) => {
    console.log(works)
    return (
        <div className={skillStyles.experience}>
            <h5>{works.jobTitle}<span>@{works.company}</span></h5>
            <ul>
                {works.jobDesc.map(workDesc => (
                    <li>{workDesc}</li>
                ))}
            </ul>
        </div>
    )
}

export default Experience