import Link from 'next/link'
import projStyles from '../styles/section/Project.module.css'
import axios from '../public/images/axios.png'
import git from '../public/images/git.png'
import tailwindcss from '../public/images/tailwindcss.jpg'


const articles = [
    {
        id: 1,
        category: 'Api',
        name: 'Data fetching with Axios in React made simple',
        stack: ['react', 'javascript', 'axios'],
        details: 'I started a project on react which I was new to some months ago and I got to a point I needed to fetch data from the server and I encountered some difficulties trying to fetch data from API. After some research and practice, I understood the concept and was able to fetch data in some other projects.',
        link: 'https://dev.to/m_adams1909/data-fetching-with-axios-in-react-made-simple-2jei',
        articleImage: axios,
        color: 'axios'
    },
    {
        id: 2,
        category: 'Version Control',
        name: 'Git and GitHub',
        stack: ['git', 'github'],
        details: 'As a developer at any level, knowledge of Git is really essential. This tutorial is beginner friendly and covers everything you need to know to get started with Git, Git commands, Git hosting services, etc. as a developer.',
        link: 'https://dev.to/m_adams1909/git-for-beginners-4857',
        articleImage: git,
        color: 'git'
    },
    {
        id: 3,
        category: 'CSS frameworks',
        name: 'Getting started with Tailwind CSS',
        stack: ['css', 'tailwindcss', 'css frameworks'],
        details: 'If there is one CSS framework I love to use frequently, it is Tailwind CSS. This tutorial is aimed at helping you to get know Tailwind CSS, the fun of using it and lastly hoping you would adopt it in your next project.',
        link: 'https://mercyadams.hashnode.dev/getting-started-with-tailwind-css',
        articleImage: tailwindcss,
        color: 'red'
    },
]

const Articles = () => {
    return (
        <div className={projStyles.articleList}>
            {articles.map(article => (
                <div className={projStyles.article} key={article.id}>
                    <span>{article.category}</span>
                    <Link href={article.link}><a target='_blank'><h4>{article.name}</h4></a></Link>
                    <p>{article.details.length > 100 ? article.details.slice(0, 100) + ' ...' : article.details}</p>

                </div>
            ))}
        </div>
    )
}

export default Articles