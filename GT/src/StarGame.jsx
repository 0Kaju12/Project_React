import { BiArrowBack } from "react-icons/bi";
import url1 from "./Images/single_digit.png";
import url2 from "./Images/jodi_digit.png";
import url3 from "./Images/single_panna.png";
import url4 from "./Images/double_panna.png";
import url5 from "./Images/triple_panna.png";
import url6 from "./Images/half_sangam.png";
import url7 from "./Images/full_sangam.png";
import topBackground from "./Images/bg.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FaDiceOne } from "react-icons/fa6";
import { CgCardSpades } from "react-icons/cg";
import { TbCards } from "react-icons/tb";
import { PiCardsBold } from "react-icons/pi";

function StarGame() {
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
    background :"white",
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
        className=" pl-2 flex justify-center items-start h-svh"
        style={backStyle}
      >
        <div className="grid grid-cols-2 mt-10" style={cardStyle}>
          <div className="flex justify-center items-center">
          <div className="shadow-md rounded-xl border w-32 h-32 col-span-1 text-yellow-600 flex justify-center items-center text-lg font-bold ">
            <button
              onClick={() => {
                navigate("/starsingle", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Digit' } });
              }}
            >
              <FaDiceOne className="w-20 h-20 ml-2"/>Single Digit
            </button>
          </div>
          </div>
          <div className="flex justify-center items-center">
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 w-32 h-32 flex justify-center items-center text-lg font-bold  ">
            <button
            onClick={() => {
              navigate("/ssinglepana", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
            }}>
              <CgCardSpades className="w-20 h-20 ml-2"/>Single Pana
            </button>
          </div>
          </div>


          {/* Second row with two columns */}
          <div className="flex justify-center items-center">
          <div className="shadow-md border rounded-xl col-span-1 text-yellow-600 w-32 h-32 flex justify-center items-center mt-4 text-lg font-bold">
            <button
              onClick={() => {
                navigate("/sdoublepana",{ state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Double Pana' } });
              }}
            >
              <PiCardsBold className="w-20 h-20"/>Double Pana
            </button>
          </div>
          </div>
            <div className="flex justify-center items-center">
            <div className="shadow-md border rounded-xl w-32 h-32 col-span-1 text-yellow-600 flex justify-center items-center mt-4 text-lg font-bold">
            <button
              onClick={() => {
                navigate("/stripplepana", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Triple Pana' } });
              }}
            >
              <TbCards className="w-20 h-20"/>Triple Pana
            </button>
          </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default StarGame;
