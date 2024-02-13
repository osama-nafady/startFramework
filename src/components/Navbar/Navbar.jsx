import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <>
        
            <nav  className="navbar navbar-expand-lg fixed-top p-3 bg-dark text-white">
                <div  className="container">
                    <Link  to="/" className="navbar-brand text-white text-uppercase fw-bolder fs-2">Start Framework </Link>
                    <button  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
                        <span  className="navbar-toggler-icon"></span>
                    </button>
                    <div  id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li  className="nav-item me-3">
                                <Link to="about" className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2">about</Link>
                            </li>
                            <li  className="nav-item me-3">
                                <Link to="portfolio" className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2">portfolio</Link>
                            </li>
                            <li  className="nav-item me-3">
                                <Link to="contact" className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    </>

}
