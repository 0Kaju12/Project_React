import { BiArrowBack } from "react-icons/bi";
import url1 from "./Images/single_digit.png";
import url2 from "./Images/jodi_digit.png";
import url3 from "./Images/single_panna.png";
import url4 from "./Images/double_panna.png";
import url5 from "./Images/triple_panna.png";
import url6 from "./Images/half_sangam.png";
import url7 from "./Images/full_sangam.png";
import topBackground from "./Images/bg.png";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { FaDiceOne } from "react-icons/fa6";
import { CgCardSpades } from "react-icons/cg";
import { TbCards } from "react-icons/tb";
import { PiCardsBold } from "react-icons/pi";
import { MdHourglassFull } from "react-icons/md";
import { MdHourglassBottom } from "react-icons/md";
import { FaDice } from "react-icons/fa6";


function Game() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    
  };

  const cardStyle = {
    width: "400px",
    // padding:"40px",
    paddingTop:"0px",
    paddingBottom: "80px"
  };

  const backStyle = {
    // backgroundImage: `url(${topBackground})`,
    background:'white',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    
  };

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }

  const { gameId, openTime, gameName } = useLocation().state;

  return (
    <>
      <div className="pl-2 flex justify-center -mt-8" style={backStyle}>
        <div className="grid grid-cols-2 gap-2 mt-10 text-lg font-bold" style={cardStyle}>
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 flex justify-center items-center ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/single", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Single Digit' } });
                }
              }}>
              <FaDiceOne className="w-20 h-20 ml-2"/>Single Digit
            </button>
          </div>
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 flex justify-center items-center ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/jodi", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Jodi Digit' } });
                }
              }}>
              <FaDice className="w-20 h-20 ml-2"/>Jodi Digit
            </button>
          </div>

          {/* Second row with two columns */}
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 flex justify-center items-center ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/singlepana", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Single Pana' } });
                }
              }}>
              <CgCardSpades className="w-20 h-20 ml-2"/>Single Pana
            </button>
          </div>
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 flex justify-center items-center ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/doublepana", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Double Pana' } });
                }
              }}>
              <PiCardsBold className="w-20 h-20"/>Double Pana
            </button>
          </div>

          {/* Third row with one column */}
          <div className="shadow-md border rounded-xl text-yellow-600 w-48 h-32 col-span-2 flex justify-center items-center ml-20 ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/tripplepana", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Triple Pana' } });
                }
              }}>
              <TbCards className="w-20 h-20 text-yellow-600"/>Triple Pana
            </button>
          </div>

          {/* Fourth row with two columns */}
          <div className="shadow-md border rounded-xl text-yellow-600 col-span-1 flex justify-center items-center -mt-10">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/halfsangam", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Half Sangam' } });
                }
              }}>
              <MdHourglassBottom className="w-20 h-20"/>Half Sangam
            </button>
          </div>
          <div className="shadow-md border rounded-xl text-yellow-600 col-span-1 flex justify-center items-center -mt-10 ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/fullsangam", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Full Sangam' } });
                }
              }}>
              <MdHourglassFull className="w-20 h-20"/>Full Sangam
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
