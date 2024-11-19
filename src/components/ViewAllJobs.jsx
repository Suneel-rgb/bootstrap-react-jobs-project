import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <Link to="/jobs" className='btn btn-lg btn-black-big py-2 px-5'>View All Jobs</Link>
                </div>
            </div>
        </section>
    )
}

export default ViewAllJobs