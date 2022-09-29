import Image from 'next/image'
import projStyles from '../styles/section/Project.module.css'
import Airbnb from '../public/images/Airbnb.png'

const articles = [
    {
        id: 1,
        category: 'Version Control',
        name: 'Git and GitHub',
        stack: ['git', 'github'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        link: 'https://codeoverflow.netlify.app',
        articleImage: Airbnb,
        color: 'red'
    },
    {
        id: 1,
        category: 'Version Control',
        name: 'Git and GitHub',
        stack: ['git', 'github'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        link: 'https://codeoverflow.netlify.app',
        articleImage: Airbnb,
        color: 'red'
    },
    {
        id: 1,
        category: 'Version Control',
        name: 'Git and GitHub',
        stack: ['git', 'github'],
        details: 'A MERN app simulating stackoverflow basic functionalities. Authenticated users can assk questions, view individual question and answer individual question.',
        link: 'https://codeoverflow.netlify.app',
        articleImage: Airbnb,
        color: 'red'
    },
]

const Articles = () => {
    return (
        <div className={projStyles.proj}>
            {articles.map(article => (
                <div className={projStyles.article}>
                    <span>{article.category}</span>
                    <h4>{article.name}</h4>
                    <p>{article.details}</p>
                    <Image
                        src={article.articleImage}
                    />
                </div>
            ))}
        </div>
    )
}

export default Articles