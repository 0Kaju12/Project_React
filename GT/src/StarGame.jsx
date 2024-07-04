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
          <h1 className="text-white px-3">{openTime}</h1>
        </div>
      </div>

      <div
        className=" pl-2 flex justify-center items-start h-svh"
        style={backStyle}
      >
        <div className="grid grid-cols-2" style={cardStyle}>
          <div className="col-span-1 flex justify-center items-center ">
            <button
              onClick={() => {
                navigate("/starsingle", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
              }}
            >
              <img src={url1} alt="Image 1" className="w-64 h-48" />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center   ">
            <button
            onClick={() => {
              navigate("/ssinglepana", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
            }}>
              <img src={url3} alt="Image 2" className="w-64 h-48" />
            </button>
          </div>

          {/* Second row with two columns */}
          <div className="col-span-1 flex justify-center items-center mt-4">
            <button
              onClick={() => {
                navigate("/sdoublepana",{ state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
              }}
            >
              <img src={url4} alt="Image 3" className="w-64 h-48" />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center mt-4">
            <button
              onClick={() => {
                navigate("/stripplepana", { state: { gameId : gameId, openTime : openTime, gameName: gameName, pana:'Single Pana' } });
              }}
            >
              <img src={url5} alt="Image 4" className="w-64 h-48" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarGame;
