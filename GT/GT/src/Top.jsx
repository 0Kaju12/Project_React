import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cara1 from './Images/top1.png';
import cara2 from './Images/top2.png';
import addfund from './Images/add_fund.png';
import whatsapp from './Images/whatsapp.png';
import call from './Images/call_helpline.png';
import withdraw from './Images/withdraw.png';
import marker from './Images/marker.png';
import black from './Images/blackjed.png';
import topBackground from './Images/bg.png';
import { useNavigate } from 'react-router-dom';
import useCarosuel from './Hooks/useCarosuel';
import { useSelector } from 'react-redux';
import star from './Images/play_starline.png';
import gali from './Images/gali_disawar.png';
import useGameFront from "./Hooks/useGameFront";

function Top() {
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
    maxHeight: '237.5px', // 95% of 250px
    maxWidth: '100%', // 95% of 100%
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
    display: 'flex',
    justifyContent: 'center',
    gridColumn: '1 / -1',
  };

  const token = useSelector(state => state.userDetail.token);
  const res = useCarosuel(token);
  const [sd, setsd] = useState([]);
  useEffect(() => {
    if (res && res.sliderdata) {
      setsd(res.sliderdata);
    }
  }, [res]);

  const navigate = useNavigate();
  const addF = () => {
    navigate('/imp9');
  }

  const unique = useSelector((state) => state.userDetail.token);
  const resinfo = useGameFront(unique);
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([{}]);

  useEffect(() => {
    if (resinfo && resinfo["mobile_1"]) {
      setStatus(true);
      setGameRates(resinfo["mobile_1"]);
    }
  }, [resinfo]);
  console.log(gameRates);

  const phoneNumber = gameRates;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const CallButton = ({ phoneNumber, imgSrc }) => (
    <a href={`tel:${phoneNumber}`} >
      <img
        src={imgSrc}
        alt="Call Button"
        style={cellImageStyle}
      />
    </a>
  );

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2" style={topStyle}>
      <div style={carouselContainerStyleRight} className='rounded-xl'>
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
            <img src={sd[0]?.slider_image} alt="image 1" className="object-cover rounded-xl" style={imageStyle} />
          </div>
          <div>
            <img src={sd[1]?.slider_image} alt="image 2" className=" object-cover rounded-xl" style={imageStyle} />
          </div>
        </Carousel>
      </div>
      <div className="relative flex flex-col items-center justify-center -mt-4">
        <div style={{ position: 'absolute' }}>
          <button onClick={() => navigate('/gameRates')} className='flex justify-center mb-2'>
            <img className='h-20' src={black} alt="Game Rates" style={cellImageStyle} />
          </button>
        </div>
        <div className="flex space-x-4 mb-1 ">
          <div className='mr-10'>
            <button onClick={() => navigate('/imp9')}>
              <img src={addfund} alt="Add Fund" style={cellImageStyle} />
            </button>
          </div>
          <div>
            <button onClick={() => navigate('/imp8')}>
              <img src={withdraw} alt="Withdraw" style={cellImageStyle} />
            </button>
          </div>
        </div>
        <div className="flex space-x-4 mt-2 ">
          <div className='mr-10'>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <button>
                <img src={whatsapp} alt="WhatsApp" style={cellImageStyle} />
              </button>
            </a>
          </div>
          <div>
            <CallButton phoneNumber="+1234567890" className='' imgSrc={call} />
          </div>
        </div>
      </div>

      <div style={markerStyle}>
        <img src={marker} alt="marker" />
      </div>
      <div className='flex justify-center items-start pb-2 col-span-full'>
        <button className='mr-3' onClick={() => navigate('/galiIMP')}>
          <img src={gali} alt="Add Fund" className='w-64 h-15' />
        </button>
        <button onClick={() => navigate('/imp2')}>
          <img src={star} alt="Add Fund" className='w-64 h-15' />
        </button>
      </div>
    </div>
  );
}

export default React.memo(Top);
