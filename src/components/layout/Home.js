import React from 'react';
import h1 from '../../media/h1.jpg';
import h2 from '../../media/h2.jpg';
import h3 from '../../media/h3.jpg';
import '../../styles/home.css';
import Card from './Card';
function Home() {
  return (
    <div>
        
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-bs-ride='carousel'
        
      >
        
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img src={h1} class='d-block w-100 imggg ' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={h2} class='d-block w-100 imggg' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={h3} class='d-block w-100 imggg' alt='...' />
          </div>
         
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
        
      </div>
      <div className="row mx-auto">
        <div className="col-3"><Card></Card></div>
        <div className="col-3"><Card></Card></div>
        <div className="col-3"><Card></Card></div>
        <div className="col-3"><Card></Card></div>
      </div>
     
    </div>
  );
}

export default Home;
