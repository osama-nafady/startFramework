import React from 'react'

export default function Footer() {
  return <>
  <footer className='bg-dark text-white text-center p-2 fixed-bottom'>
            <div class="card-group m-4">
                <div  class="card">
                    <div  class="card-body text-center">
                        <h3 >LOCATION</h3>
                        <p >2215 John Daniel Drive</p>
                        <p >Clark, MO 65243</p>
                    </div>
                </div>
                <div  class="card text-white">
                    <div  class="card-body text-center">
                        <h3 >AROUND THE WEB</h3>
                        <div  class="icons">
                            <i  class="fa-brands fa-facebook mx-1 icon"></i>
                            <i  class="fa-brands fa-twitter mx-1 icon"></i>
                            <i  class="fa-brands fa-linkedin-in mx-1 icon"></i>
                            <i  class="fa-solid fa-globe mx-1 icon"></i>
                        </div>
                    </div>
                </div>
                <div  class="card">
                    <div  class="card-body text-center">
                        <h3 >ABOUT FREELANCER</h3>
                        <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
            </div>

            <div  class="p">
                <p >Copyright © Your Website 2021</p>
            </div>
        </footer>
  </>
}
