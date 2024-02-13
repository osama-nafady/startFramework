import React from 'react';
import style from './About.module.css';

export default function About() {
  return <>
    <div className={`${style.about} min-vh-100 d-flex justify-content-center align-items-center`}>
      <div className="container">
      <div className="text-center text-white">
        <div className='text-center pt-4'>
          <h2 className='h1'>ABOUT COMPONENT</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className={`${style.lines} line me-3 bg-white`}></div>
            <i className='fa-solid fa-star'></i>
            <div className={`${style.lines} line ms-3 bg-white`}></div>
          </div>
        </div>
      
      </div>
      <div className="row text-white px-5">
        <div className="col-md-6 ps-md-5">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization
          </p>
        </div>
      </div>
    </div>
    </div>
  </>
}

