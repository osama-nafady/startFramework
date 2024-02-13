import React from 'react'
import avatar from '../../Assets/Images/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
  return <>

    <div className={`${style.home} min-vh-100 d-flex justify-content-center align-items-center`}>
      <div className="text-center text-white">
        <img src={avatar} alt="" />

        <div className='text-center pt-4'>
          <h2 className='h1'>START FRAMEWORK</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className={`${style.lines} line me-3 bg-white`}></div>
            <i className='fa-solid fa-star'></i>
            <div className={`${style.lines} line ms-3 bg-white`}></div>
          </div>
        </div>
        <div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>


  </>
}
