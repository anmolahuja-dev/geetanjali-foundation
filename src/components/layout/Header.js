import React from 'react';

import { useState,useEffect } from 'react';
import '../../styles/navbar.css'
// fixed top ko edit krde on scroll


function Header() {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
  }, []);
  return (
    <div>
      <nav class='navbar bg-warning'>
        <div class='container-fluid'>
          <div className='ms-5 text-light'>
            <i class='fa-solid fa-house'></i> C-5/165 Yamuna vihar Delhi{' '}
            <i class=' ms-3 fa-solid fa-phone'></i>+91XXXXXXX
          </div>
          <div className="d-flex me-5">
            <h6>
            <i class="fa-brands fa-facebook mx-1"></i>
            <i class="fa-brands fa-instagram mx-1"></i>
            <i class="fa-brands fa-twitter mx-1"></i>
            <i class="fa-brands fa-google-plus mx-1"></i>
            </h6>
          </div>
        </div>
      </nav>
      <nav className={scroll?"navbar fixed-top navbar-expand-lg navbar-dark bgg " :"navbar navbar-expand-lg "} style={{height:"70px"}}>
      <div class="container-fluid mx-4">
        <h3><a class="navbar-brand fw-bold" href="#">GEETANJALI</a></h3>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex me-4">
          <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
            <div class="navbar-nav  ">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">About</a>
              <a class="nav-link" href="#">Causes</a>
              <a class="nav-link ">Event</a>
              <a class="nav-link ">Page</a>
              <a class="nav-link ">Blog</a>
              <a class="nav-link ">Contact</a>
              <button className='btn btn-warning'>Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
