import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cara1 from "./Images/top1.png";
import cara2 from "./Images/top2.png";
import addfund from "./Images/add_fund.png";
import whatsapp from "./Images/whatsapp.png";
import call from "./Images/call_helpline.png";
import withdraw from "./Images/withdraw.png";
import marker from "./Images/marker.png";
import black from "./Images/blackjed.png";
import topBackground from "./Images/bg.png";
import { useNavigate } from "react-router-dom";
import useCarosuel from "./Hooks/useCarosuel";
import { useSelector } from "react-redux";
import star from "./Images/7.png";
import gali from "./Images/6.png";
import useGameFront from "./Hooks/useGameFront";
import top_bg from "./Images/top_bg.jpg";
import { RiFundsFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { MdWallet } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaCircleStop } from "react-icons/fa6";

function Top() {
  const topStyle = {
    // backgroundImage: `url(${top_bg})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",  // Adjust based on your layout needs
    width: "auto",
  };

  const baseCarouselContainerStyle = {
    paddingTop: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "5px",
    zIndex: "0",
  };

  const carouselContainerStyleRight = {
    ...baseCarouselContainerStyle,
    transform: "scale(1, 0.80)", // Scale vertically
    transformOrigin: "right",
  };

  const imageStyle = {
    maxHeight: "237.5px", // 95% of 250px
    maxWidth: "100%", // 95% of 100%
    height: "100%",
    width: "100%",
  };

  const cellImageStyle = {
    maxWidth: "150px",
    maxHeight: "100px",
    objectFit: "cover",
  };

  const centerStyle = {
    width: "auto",
    padding: "10px",
    borderRadius: "50%", // Make it circular
  };

  const markerStyle = {
    display: "flex",
    justifyContent: "center",
    gridColumn: "1 / -1",
  };

  const token = useSelector((state) => state.userDetail.token);
  const res = useCarosuel(token);
  const [sd, setsd] = useState([]);
  useEffect(() => {
    if (res && res.sliderdata) {
      setsd(res.sliderdata);
    }
  }, [res]);

  const navigate = useNavigate();
  const addF = () => {
    navigate("/imp9");
  };

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
    <a href={`tel:${phoneNumber}`}>
      <img src={imgSrc} alt="Call Button" style={cellImageStyle} />
    </a>
  );

  return (
    <div
      className="px-2"
      style={topStyle}
    >
    <div className="flex items-center justify-center mb-2 mt-2">
      <div onClick={() => navigate("/imp9")} className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center  z-4 hover:shadow-lg shadow-md"><button  className="flex flex-col py-2 px-1 items-center justify-center"><p className="font-bold">Add-Fund</p> <FaRegCreditCard className="text-4xl" /></button> </div>
      <div onClick={() => navigate("/imp7")} className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center  z-4 hover:shadow-lg shadow-md"> <button  className="flex flex-col py-2 px-1 items-center justify-center"><p className="font-bold">Wallet</p> <MdWallet className="text-4xl" /></button> </div>
      <div className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center  z-4 hover:shadow-lg shadow-md">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex flex-col py-2 px-1 items-center justify-center">
          <p className="font-bold">Whatsapp</p>
          <FaWhatsapp className="text-4xl" />
        </button>
      </a>
    </div>
      <div className="w-1/4 mr-2 bg-black border-4 text-white  rounded-xl border-yellow-600 flex items-center justify-center  z-4 hover:shadow-lg shadow-md"><button className="flex flex-col py-2 px-1 items-center justify-center"><p className="font-bold">Helpline</p> <IoCall className="text-4xl" /></button>  </div>
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
        <button className="mr-3" onClick={() => navigate("/galiIMP")}>
          <img src={gali} alt="Add Fund" className="w-64 h-20" />
          {/* <FaStar /> <span>PLAY STARLINE</span> */}
        </button>
        <button onClick={() => navigate("/imp2")}>
          <img src={star} alt="Add Fund" className="w-64 h-20" />
        </button>
      </div>
      {/* <div className="flex items-center justify-center mb-2">
      <div onClick={() => navigate("/galiIMP")} className="w-1/2 mr-2 bg-yellow-600 text-white border flex items-center justify-center rounded z-4 hover:shadow-lg shadow-md"><button  className="flex  h-16 px-1 items-center justify-between"> <FaCircleStop className="text-4xl mr-4" /><p className="text-xl">GALI DISAWAR</p></button> </div>
      <div onClick={() => navigate("/imp2")} className="w-1/2 mr-2 bg-yellow-600 text-white border flex items-center justify-center rounded z-4 hover:shadow-lg shadow-md"> <button  className="flex  h-16 px-1 items-center justify-between"><FaStar className="text-4xl mr-4" /> <p className="text-xl">PLAY STARLINE</p></button> </div>
      </div> */}

    </div>
  );
}

export default React.memo(Top);

// <div>
          
//           <button
          
//             type="button"
//             className="flex items-center justify-center text-gray-900 bg-white border  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
//             onClick={() => navigate("/imp9")}
//           >
//            <RiFundsFill className="mr-2 w-8 h-6" /> Add Funds
//           </button>
//         </div>
//         <div>
//           <button
//             type="button"
//             className="text-gray-900 bg-white border  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
//             onClick={() => navigate("/imp8")}
//           >
           
//      Withdraw
//           </button>
//         </div>
//         <div>
//           <a
//             href={whatsappUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex justify-center items-center w-full"
//           >
//             <button
//               type="button"
//               className="text-gray-900 bg-white border   focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
//             >
//               WhatsApp
//             </button>
//           </a>
//         </div>
//         <div>
//           <button
//             type="button"
//             className="text-gray-900 bg-white border  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
//             onClick={() => navigate("/imp8")}
//           >
//             Call Helpline
//           </button>
//         </div>
