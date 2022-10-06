import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='heading'>
            <h2>{title}</h2>
            <span></span>
            <style jsx> {
                `
            .heading {
                display: flex;
                align-items: center;
                width: 100%;
                color: var(--heading);
                padding-bottom: 1rem;
            }
            .heading span {
                width: 30%;
                border: 0.2px solid var(--rule);
                margin-left: 1rem;
                margin-top: .5rem;
            }
            @media (max-width: 525px) {
                .heading {
                    font-size: var(--defaultText);
                }
            }
            @media (max-width: 425px) {
                .heading {
                    font-size: var(--btnText);
                }
            }
            `
            }
            </style>
        </div>
    )
}

export default Heading