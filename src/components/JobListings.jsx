import React, { useEffect, useState } from 'react'
import '../styles/JobListings.css'
import jobs from '../jobs.json'
import JobListing from './JobListing'
import Spinners from './Spinners'

const JobListings = ({ isHome = false }) => {
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, [])

    return (
        <section className='py-5 bg-light-color recent_jobs'>
            <div className='container'>
                <h2 className='text-center mb-5 text-blue'>{isHome ? "Recent Jobs" : "Browse Jobs"}</h2>
                <div className='row'>
                    {loading ? (<Spinners loading={loading} />) : (
                        <>
                            {
                                jobs.map((job) => (
                                    <JobListing key={job.id} job={job} />
                                ))
                            }
                        </>
                    )}
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default JobListings