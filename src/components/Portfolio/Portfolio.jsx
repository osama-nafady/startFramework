import React from 'react'
import img1 from '../../Assets/Images/port1.png';
import img2 from '../../Assets/Images/port2.png';
import img3 from '../../Assets/Images/port3.png';
import style from './Portfolio.module.css';

export default function Portfolio() {
  return <>
    <div className={`${style.portfolio} min-vh-100 d-flex justify-content-center align-items-center`}>
      <div className="container">
        <div className="text-center text-white">
          <div className='text-center pt-4'>
            <h2 className={`${style.title} h1`}>PORTFOLIO COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className={`${style.lines} line me-3`}></div>
              <i className={`${style.star} fa-solid fa-star`}></i>
              <div className={`${style.lines} line ms-3`}></div>
            </div>
          </div>

        </div>
       
            <div className="container ">
              <div className="row g-5">
                <div className="col-md-4">
                  <div className="item position-relative overflow-hidden text-center">
                    <img src={img1} className="w-100" alt="" />
                    <div className="layer">

                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="item position-relative overflow-hidden text-center">
                    <img src={img2} className="w-100" alt="" />
                    <div className="layer">

                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="item position-relative overflow-hidden text-center">
                    <img src={img3} className="w-100" alt="" />
                    <div className="layer">

                    </div>
                  </div>

                </div>


                <div className="col-md-4">
                  <div className="item position-relative overflow-hidden text-center">
                    <img src={img1} className="w-100" alt="" />
                    <div className="layer">

                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="item position-relative overflow-hidden text-center">
                    <img src={img2} className="w-100" alt="" />
                    <div className="layer">

                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="item position-relative overflow-hidden text-center">
                    <img src={img3} className="w-100" alt="" />
                    <div className="layer">

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
     
  </>
}
