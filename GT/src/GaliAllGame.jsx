import { BiArrowBack } from "react-icons/bi";
import right from "./Images/right_digit.png";
import left from "./Images/left_digit.png";
import jodi from "./Images/jodi_digit_image.png";
import topBackground from "./Images/bg.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { GiRollingDices } from "react-icons/gi";

function GaliAllGame() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const cardStyle = {
    width: "400px",
  };

  const backStyle = {
    background:'white',
    backgroundSize: "cover",
  };
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const { gameId,openTime, gameName } = useLocation().state;

  console.log(gameId);

  return (
    <>
      <div
        className=" pl-2 flex-col justify-center items-start h-svh"
        style={backStyle}
      >
        <div className="flex justify-center items-center mt-10">
        <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 flex justify-center items-center mt-4 text-lg font-bold mr-20 w-32 h-32 ">
            <button
             onClick={()=>{
              if (gameId) {
                console.log(gameId)
                navigate("/leftdigit", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
              }
            }}>
              <FaAnglesLeft className="w-20 h-20" /> Left Digit
              {/* <img src={left} alt="Image 3" className="w-42 h-32" /> */}
            </button>
          </div>
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 flex justify-center items-center mt-4 text-lg font-bold w-32 h-32">
            <button
             onClick={()=>{
              if (gameId) {
                console.log(gameId)
                navigate("/rightdigit", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Right Digit' } });
              }
            }}>
                <FaAnglesRight className="w-20 h-20" /> Right Digit
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 pt-10" style={cardStyle}> */}


          {/* Third row with one column */}
          <div className="flex justify-center items-center">
          <div className="shadow-md border rounded-xl col-span-2 text-yellow-600 w-32 h-32 flex justify-center items-center mt-7 text-lg font-bold ml-25 ">
            <button
             onClick={()=>{
              if (gameId) {
                console.log(gameId)
                navigate("/jodidigit", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Triple Pana' } });
              }
            }}>
              <GiRollingDices  className="w-20 h-20" /> Jodi Digit
            </button>
          </div>
          </div>

        </div>
      {/* </div> */}
    </>
  );
}

export default GaliAllGame;
