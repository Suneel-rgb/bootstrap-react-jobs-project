import React from 'react'
import '../styles/HomeCards.css'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
    return (
        <section className='pt-5 pb-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mb-4'>
                        <Card>
                            <h5 className='fw-bold mb-3'>For Developers</h5>
                            <p>Browse our React jobs and start your career today</p>
                            <Link to='/jobs' className='btn btn-black'>Browse Jobs</Link>
                        </Card>
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <Card bg="bg-light-blue">
                            <h5 className='fw-bold mb-3'>For Employers</h5>
                            <p>List your job to find the perfect developer for the role</p>
                            <Link to='/add-job' className='btn btn-blue'>Add Job</Link>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCards