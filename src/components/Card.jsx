import React from 'react'

const Card = ({ children, bg = 'bg-light-grey' }) => {
    return (
        <div className={`card p-4 ${bg} border-0`}>
            {children}
        </div>
    )
}

export default Card