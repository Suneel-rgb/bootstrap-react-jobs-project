import React from 'react'
import { FaExclamation, FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className='d-flex justify-content-center align-items-center py-5'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <FaExclamationTriangle size={30} color='orange' />
                </div>
                <div>
                    <h2 className='text-center'>404 Not Found</h2>
                    <p className='text-center mb-5'>This page does not exist</p>
                    <Link to="/" className="btn btn-blue d-block mx-auto">Go Back</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage