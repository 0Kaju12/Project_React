import logo from "./Images/logo.png";
import { BiArrowBack } from "react-icons/bi";
import topBackground from './Images/bg.png';
import { useNavigate } from "react-router-dom";
import useHowtoPlay from "./Hooks/useHowtoPlay";
import { useState, useEffect } from "react";

function Htp() {
  
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const divStyle = {
     // Adjust the border width and color as needed
    padding: "20px", // Optional: Adding padding for better visibility
    borderBottom: '2px solid white'
  };
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover', // This will make the background image cover the container without 
    backgroundPosition: 'center',
    position:'relative'
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/imp");
  };
  const resinfo = useHowtoPlay();
  useEffect(() => {
    if (resinfo && resinfo["result"]) {
      setStatus(true);
      setGameRates(resinfo["result"]);
    }
  }, [resinfo]);
  console.log(resinfo);

  const renderHowToPlayContent = () => {
    return {__html: resinfo?.content?.[0]?.how_to_play_content};
  }

  return (
    <div className="relative h-svh">
      <div className="ticky top-0">
        <div className="bg-custom-purple text-white s" style={navbarStyle}>
          <button className="px-4" onClick={()=>back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 ">How To Play</h1>
          </div>
        </div>
      </div>
      <div className="h-screen" style={backStyle}>
        <div
          className="sticky top-5 text-white "
          style={divStyle}
        >
          <div className="flex justify-center items-center ">
            <img src={logo} alt="Center Image" className="w-40 h-40" />
          </div>
        </div>
        <div className="text-white flex flex-col p-5" dangerouslySetInnerHTML={renderHowToPlayContent()}>
        </div>
      </div>
    </div>
  );
}
export default Htp;
