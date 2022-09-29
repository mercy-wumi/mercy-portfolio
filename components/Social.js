import { BsLinkedin, BsTwitter } from 'react-icons/bs'

const Social = () => {
    return (
        <div className='all-social'>
            <ul className='social'>
                <li>LInkedIn</li>
                <li>Twitter</li>
                <li>Dev.to</li>
                <li>GitHub</li>
            </ul>
            <style jsx>
                {
                    `
                    .all-social {
                        position: fixed;
                        width: inherit;
                        z-index: 10;
                        top: 60%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end !important; 
                    }
                    .social {
                        list-style-type: none;
                        padding: 0
                    }
                    `
                }
            </style>
        </div>
    )
}

export default Social