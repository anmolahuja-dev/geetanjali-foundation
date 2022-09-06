import React from 'react';
import mainVid from '../../media/mainVid.mp4';
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
            <video muted autoPlay loop>
              <source src={mainVid} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
      <div className='row mx-auto'>
        <div className='col-12 col-sm-3'>
          <Card></Card>
        </div>
        <div className='col-12 col-sm-3'>
          <Card></Card>
        </div>
        <div className='col-12 col-sm-3'>
          <Card></Card>
        </div>
        <div className='col-12 col-sm-3'>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
