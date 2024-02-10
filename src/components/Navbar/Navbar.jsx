import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <>
        
            <nav  class="navbar navbar-expand-lg fixed-top p-3 bg-dark text-white">
                <div  class="container">
                    <Link  to="/" class="navbar-brand text-white text-uppercase fw-bolder fs-2">Start Framework </Link>
                    <button  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                        <span  class="navbar-toggler-icon"></span>
                    </button>
                    <div  id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul  class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li  class="nav-item me-3">
                                <Link to="about" class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2">about</Link>
                            </li>
                            <li  class="nav-item me-3">
                                <Link to="portfolio" class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2">portfolio</Link>
                            </li>
                            <li  class="nav-item me-3">
                                <Link to="contact" class="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    </>

}
