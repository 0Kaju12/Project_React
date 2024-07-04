import { BiArrowBack } from "react-icons/bi";
import right from "./Images/right_digit.png";
import left from "./Images/left_digit.png";
import jodi from "./Images/jodi_digit_image.png";
import topBackground from "./Images/bg.png";
import { useNavigate, useLocation } from "react-router-dom";

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
    backgroundImage: `url(${topBackground})`,
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
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">{gameName}</h1>
        </div>
      </div>

      <div
        className=" pl-2 flex justify-center items-start h-svh"
        style={backStyle}
      >
        <div className="grid grid-cols-2 pt-10" style={cardStyle}>
        <div className="col-span-1 flex justify-center items-center mt-4 ">
            <button
             onClick={()=>{
              if (gameId) {
                console.log(gameId)
                navigate("/leftdigit", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
              }
            }}>
              <img src={left} alt="Image 3" className="w-42 h-32" />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center mt-4">
            <button
             onClick={()=>{
              if (gameId) {
                console.log(gameId)
                navigate("/rightdigit", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Right Digit' } });
              }
            }}>
              <img src={right} alt="Image 4" className="w-42 h-32" />
            </button>
          </div>

          {/* Third row with one column */}
          <div className="col-span-2 flex justify-center items-center mt-4">
            <button
             onClick={()=>{
              if (gameId) {
                console.log(gameId)
                navigate("/jodidigit", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Triple Pana' } });
              }
            }}>
              <img src={jodi} alt="Image 5" className="w-42 h-36 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GaliAllGame;
