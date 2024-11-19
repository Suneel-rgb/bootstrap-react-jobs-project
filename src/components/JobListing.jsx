import React, { useState } from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if (!showFullDescription) {
        description = description.substring(0, 100) + "...";
    }

    return (
        <div className='col-lg-4 mb-4'>
            <div className='card bg-white p-3 shadow-sm border-0 h-100'>
                <p className='mb-1'>{job.type}</p>
                <h5 className='mb-3'>{job.title}</h5>
                <p className='mb-3'>{description}</p>
                <button className='btn less_more_btn mb-3' onClick={() => setShowFullDescription((prevState) => !prevState)}>{showFullDescription ? "Less" : "More"}</button>
                <p className='text-blue salary'>{job.salary} / Year</p>
                <hr className='m-0 p-0' />
                <div className='d-flex justify-content-between align-items-center pt-3'>
                    <div className='location d-flex gap-2'>
                        <FaLocationPin className='mb-1' />
                        <span className='location_name'>{job.location}</span>
                    </div>
                    <div>
                        <Link to={`/jobs/${job.id}`} className='btn btn-blue'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobListing