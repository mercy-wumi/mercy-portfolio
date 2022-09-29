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
                color: var(--heading)
            }
            .heading span {
                width: 30%;
                border: 0.2px solid var(--rule);
                margin-left: 1rem;
                margin-top: .5rem;
            }
            `
            }
            </style>
        </div>
    )
}

export default Heading