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
import star from '../Images/7.png'
import gali from '../Images/6.png'
import topBackground from '../Images/bg.png';
import { useNavigate } from 'react-router-dom';
import useCarosuel from '../Hooks/useCarosuel';
import {  useSelector } from 'react-redux';
import { FaRegCreditCard } from "react-icons/fa";
import { MdWallet } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaCircleStop } from "react-icons/fa6";




function LandingTop() {
  const topStyle = {
    // backgroundImage: `url(${topBackground})`,
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
    <><div style={topStyle} className='px-2'>
      
    <div className="flex items-center justify-center pt-2 mb-2 ">
      <div onClick={() => navigate("/login")} className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center z-4 hover:shadow-lg shadow-md"><button  className="flex flex-col py-2 px-1 items-center justify-center"><p className="font-bold text-sm">Add-Fund</p> <FaRegCreditCard className="text-4xl" /></button> </div>
      <div onClick={() => navigate("/login")} className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center z-4 hover:shadow-lg shadow-md"> <button onClick={() => navigate("/login")} className="flex flex-col py-2 px-1 items-center justify-center"><p className="font-bold">Wallet</p> <MdWallet className="text-4xl" /></button> </div>
      <div onClick={() => navigate("/login")} className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center z-4 hover:shadow-lg shadow-md">
      <a
        
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex flex-col py-2 px-1 items-center justify-center" onClick={()=> navigate("/login")}>
          <p className="font-bold">Whatsapp</p>
          <FaWhatsapp className="text-4xl" />
        </button>
      </a>
    </div>
      <div onClick={() => navigate("/login")} className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center  z-4 hover:shadow-lg shadow-md"><button className="flex flex-col py-2 px-1 items-center justify-center" onClick={()=> navigate("/login")}><p className="font-bold">Helpline</p> <IoCall className="text-4xl" /></button>  </div>
      {/* <div className="grid grid-cols-2 gap-4">
        <div>
          
          <button
          
            type="button"
            className="flex items-center justify-center text-gray-900 bg-white border  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            onClick={() => navigate("/imp9")}
          >
           <RiFundsFill className="mr-2 w-8 h-6" /> Add Funds
          </button>
        </div>
        <div>
          <button
            type="button"
            className="text-gray-900 bg-white border  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            onClick={() => navigate("/imp8")}
          >
           
     Withdraw
          </button>
        </div>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full"
          >
            <button
              type="button"
              className="text-gray-900 bg-white border   focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            >
              WhatsApp
            </button>
          </a>
        </div>
        <div>
          <button
            type="button"
            className="text-gray-900 bg-white border  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            onClick={() => navigate("/imp8")}
          >
            Call Helpline
          </button>
        </div>
      </div> */}
    </div>

      <div className="flex justify-center items-start pb-2 col-span-full">
        <button className="mr-3 " onClick={() => navigate("/login")}>
          <img src={gali} alt="Add Fund" className="w-64 h-20" />
        </button>
        <button onClick={() => navigate("/login")}>
          <img src={star} alt="Add Fund" className="w-64 h-20 mt-1" />
        </button>
      </div>
      {/* <div className="flex items-center justify-center mb-2">
      <div onClick={() => navigate("/login")} className="w-1/2 mr-2 bg-yellow-600 text-white border flex items-center justify-center rounded z-4 hover:shadow-lg shadow-md"><button  className="flex  h-16 px-1 items-center justify-between"> <FaCircleStop className="text-4xl mr-4" /><p className="text-xl">GALI DISAWAR</p></button> </div>
      <div onClick={() => navigate("/login")} className="w-1/2 mr-2 bg-yellow-600 text-white border flex items-center justify-center rounded z-4 hover:shadow-lg shadow-md"> <button  className="flex  h-16 px-1 items-center justify-between"><FaStar className="text-4xl mr-4" /> <p className="text-xl">PLAY STARLINE</p></button> </div>
      </div> */}
    </div>
    </>
    
  );
}

export default React.memo(LandingTop);