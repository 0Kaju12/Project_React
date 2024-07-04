import React, { useState , useEffect, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cara1 from '../Images/top1.png';
import cara2 from '../Images/top2.png';
import addfund from '../Images/add_fund.png';
import whatsapp from '../Images/whatsapp.png';
import call from '../Images/call_helpline.png';
import withdraw from '../Images/withdraw.png';
import marker from '../Images/marker.png';
import black from '../Images/blackjed.png';
import star from '../Images/play_starline.png'
import gali from '../Images/gali_disawar.png'
import topBackground from '../Images/bg.png';
import { useNavigate } from 'react-router-dom';
import useCarosuel from '../Hooks/useCarosuel';
import {  useSelector } from 'react-redux';



function LandingTop() {
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: 'auto', // Set the height of the div
    width: '100%' // Set the width of the div
  };
  
  const baseCarouselContainerStyle = {
    paddingTop: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '5px',
    zIndex: '0',
  };


  const carouselContainerStyleRight = {
    ...baseCarouselContainerStyle,
    transform: 'scale(1, 0.80)', // Scale vertically
    transformOrigin: 'right',
  };

  const imageStyle = {
    maxHeight: '250px',
    maxWidth: '100%',
    height: '100%',
    width: '100%',
  };

  const cellImageStyle = {
    maxWidth: '150px',
    maxHeight: '100px',
    objectFit: 'cover',
  };

  const centerStyle = {
    width: 'auto',
    padding: '10px',
    borderRadius: '50%', // Make it circular



  };

  const markerStyle = {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    gridColumn: '1 / -1',
  };


  const navigate = useNavigate();
  const goTo=()=>{
    navigate('login');
  }


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2" style={topStyle}>
      <div style={carouselContainerStyleRight}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          infiniteLoop={true}
          emulateTouch={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={true}
          width={'100%'}
          height={'0px'}
          centerMode={false}
        >
          <div>
            <img src={cara1} alt="image 1" className="h-full w-full object-cover rounded-xl" style={imageStyle} />
          </div>
          <div>
            <img src={cara2} alt="image 2" className="h-full w-full object-cover rounded-xl" style={imageStyle} />
          </div>
        </Carousel>
      </div>
      <div className="relative flex flex-col items-center justify-center">
  <div style={{ position: 'absolute' }}>
    <button onClick={() => navigate('/login')} className='flex justify-center'>
      <img className='h-20' src={black} alt="Game Rates" style={cellImageStyle} />
    </button>
  </div>
  <div className="flex space-x-4 mb-1">
    <div className='mr-10'>
      <button onClick={() => navigate('/login')}>
        <img src={addfund} alt="Add Fund" style={cellImageStyle} />
      </button>
    </div>
    <div>
      <button onClick={() => navigate('/login')}>
        <img src={withdraw} alt="Withdraw" style={cellImageStyle} />
      </button>
    </div>
  </div>
  <div className="flex space-x-4  ">
    <div className='mr-12'>
      <a href="/login" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
        <button>
          <img src={whatsapp} alt="WhatsApp"  style={cellImageStyle} className='w-36' />
        </button>
      </a>
    </div>
    <div className='ml-3'>
      <button onClick={() => navigate('/login')}>
        <img src={call} alt="Call"  style={cellImageStyle} className='w-36' />
      </button>
    </div>
  </div>
</div>
      <div style={markerStyle}>
        <img src={marker} alt="marker" />
      </div>
      <div className='flex justify-center items-start pb-3 col-span-full'>
      <button className='mr-3' onClick={() => navigate('/login')}>
              <img src={gali} alt="Add Fund" className='w-64 h-15' />
            </button>
            <button onClick={() => navigate('/login')}>
              <img src={star} alt="Add Fund" className='w-64 h-15' />
            </button>
      </div>
    </div>
  );
}

export default React.memo(LandingTop);