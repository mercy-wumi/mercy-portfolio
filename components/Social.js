import Link from 'next/link'
import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from 'react-icons/bs'

const Social = ({ row }) => {
    return (
        <div>
            <div className={`${row === 'true' ? 'socialRow' : 'socialColumn'}`}>
                <Link href='https://www.linkedin.com/in/adamsmercy'><a target='_blank' rel="noopener noreferrer" className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsLinkedin /></a></Link>
                <Link href='/'><a target='_blank' rel="noopener noreferrer" className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsTwitter /></a></Link>
                <Link href='https://github.com/mercy-wumi'><a target='_blank' rel="noopener noreferrer" className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsGithub /></a></Link>
                <Link href='/'><a target='_blank' rel="noopener noreferrer" className={`${row === 'true' ? 'icon' : 'iconSpaceRow'}`}><BsInstagram /></a></Link>
            </div>
            <style jsx>
                {
                    `
                    .socialColumn {
                        display: flex;
                        flex-direction: row;
                    }
                    .socialRow {
                        display: flex;
                        flex-direction: column;
                    }
                    .icon {
                        margin: 1rem 0
                    }
                    .iconSpaceRow {
                        margin: 2rem
                    }
                    .icon:hover,
                    .iconSpaceRow:hover {
                        transform: scale(2);
                        color: var(--btn-border)
                    }
                    @media(max-width: 600px) {
                        .iconSpaceRow {
                        margin: 1rem
                    }
                    }
                    `
                }
            </style>
        </div>
    )
}

export default Social