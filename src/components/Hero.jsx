import React from 'react'
import '../styles/Hero.css'

const Hero = ({ title = "Become a React Dev", subtitle = "Find the React job that fits your skill set" }) => {
    return (
        <section className='hero_section'>
            <div className='container'>
                <h1 className='text-center text-white'>{title}</h1>
                <p className='text-center text-white'>{subtitle}</p>
            </div>
        </section>
    )
}

export default Hero