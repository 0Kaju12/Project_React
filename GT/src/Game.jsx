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
    backgroundImage: `url(${topBackground})`,
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
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">{gameName}</h1>
        </div>
      </div>

      <div className="pl-2 flex justify-center -mt-8" style={backStyle}>
        <div className="grid grid-cols-2 gap-2 " style={cardStyle}>
          <div className="col-span-1 flex justify-center items-center ">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/single", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Single Digit' } });
                }
              }}>
              <img src={url1} alt="Image 1" className="w-32 h-32" />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/jodi", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Jodi Digit' } });
                }
              }}>
              <img src={url2} alt="Image 2" className="w-32 h-32" />
            </button>
          </div>

          {/* Second row with two columns */}
          <div className="col-span-1 flex justify-center items-center -mt-12">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/singlepana", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Single Pana' } });
                }
              }}>
              <img src={url3} alt="Image 3" className="w-32 h-32" />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center -mt-12">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/doublepana", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Double Pana' } });
                }
              }}>
              <img src={url4} alt="Image 4" className="w-32 h-32" />
            </button>
          </div>

          {/* Third row with one column */}
          <div className="col-span-2 flex justify-center items-center -mt-12">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/tripplepana", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Triple Pana' } });
                }
              }}>
              <img src={url5} alt="Image 5" className="w-32 h-32" />
            </button>
          </div>

          {/* Fourth row with two columns */}
          <div className="col-span-1 flex justify-center items-center -mt-12">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/halfsangam", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Half Sangam' } });
                }
              }}>
              <img src={url6} alt="Image 6" className="w-32 h-32" />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center -mt-12">
            <button
              onClick={() => {
                if (gameId) {
                  console.log(gameId)
                  navigate("/fullsangam", { state: { gameId: gameId, openTime: openTime, gameName: gameName, pana: 'Full Sangam' } });
                }
              }}>
              <img src={url7} alt="Image 7" className="w-32 h-32" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
