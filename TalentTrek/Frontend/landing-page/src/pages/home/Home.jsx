import React from 'react'
import "./Home.css"
import bannerImg from "../../assets/job-banner.jpg";
import { FaComputer } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { BiSolidShoppingBagAlt } from "react-icons/bi";




const Home = () => {

  const jobs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $150k',
    image: `https://picsum.photos/40?random=${i + 1}`,
  }));

  return (
    <>
   <div className="job-banner">
      
      <div className="job-left">
        <h1 className="job-title">
          Find Your Dream Job <br /> Today
        </h1>
        <p className="job-subtitle">
          Connect with top employers and discover opportunities that match your skills and aspirations.
        </p>
        <div className="job-search-fields">
          <input type="text" placeholder="Job title or keyword" className="job-input" />
          <input type="text" placeholder="Location" className="job-input" />
          <button className="job-btn">Search Jobs</button>
        </div>
      </div>

       
      <div className="job-right">
        <img
          src={bannerImg}
          alt="High five in office"
          className="job-image"
        />
      </div>
    </div>
    <div className="job-categories-container">
      {/* Top Section */}
      <div className="job-categories-header">
        <h2>Popular Job Categories</h2>
      </div>

      {/* Bottom Section - Category Cards */}
      <div className="job-categories-cards">
        <div className="job-card">
        <FaComputer  className='icon'/>
          <h3>Technology</h3>
          <p>1,543 jobs</p>
        </div>
        <div className="job-card">
        <FaArrowTrendUp className='icon'/>
          <h3>Marketing</h3>
          <p>854 jobs</p>
        </div>
        <div className="job-card">
        <IoMdPeople className='icon'/>
          <h3>Design</h3>
          <p>657 jobs</p>
        </div>
        <div className="job-card">
        <BiSolidShoppingBagAlt className='icon'/>
          <h3>Sales</h3>
          <p>432 jobs</p>
        </div>
      </div>
    </div>
    <div className="job-container">
      <h2 className="title">Featured Job Opportunities</h2>
      <div className="job-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-info">
              <div>
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="details">📍 {job.location} &nbsp;&nbsp;|&nbsp;&nbsp; {job.type}</p>
                <p className="salary">{job.salary}</p>
              </div>
              <img src={job.image} alt="company" className="company-img" />
            </div>
            <a href="#" className="apply-link">Apply Now →</a>
          </div>
        ))}
      </div>
      <button className="view-btn">View All Jobs</button>
    </div>
    </>
  )
}

export default Home