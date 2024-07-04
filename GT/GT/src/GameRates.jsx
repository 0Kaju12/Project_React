import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import topBackground from './Images/bg.png';
import { useNavigate } from 'react-router-dom';
import useGameRate from "./Hooks/useGameRate.jsx";

function GameRates() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  };
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  };
  const newStyle = {
    borderRadius: '5px',
    padding: '4px',
    marginBottom: '25px',
  };
  const navigate = useNavigate();
  const resinfo = useGameRate();

  useEffect(() => {
    if (resinfo && resinfo['game_rates']) {
      setStatus(true);
      setGameRates(resinfo['game_rates'][0]);
    }
  }, [resinfo]);

  const back = () => {
    navigate("/imp");
  };

  return (
    <>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={() => back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 ">Game Rates</h1>
          </div>
        </div>
      </div>
      <div className="h-screen" style={backStyle}>
        <div style={cardStyle}>
          {status && (
            <>
              <div className=" text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Single Digit</p>
                <p>{gameRates['single_digit_val_1']}-{gameRates['single_digit_val_2']}</p>
              </div>

              <div className="bg-linear-gradient(to right, #141384, #000000) text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Jodi Digit</p>
                <p>{gameRates['jodi_digit_val_1']}-{gameRates['jodi_digit_val_2']}</p>
              </div>

              <div className="bg-linear-gradient(to right, #141384, #000000) text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Single Panna</p>
                <p>{gameRates['single_pana_val_1']}-{gameRates['single_pana_val_2']}</p>
              </div>

              <div className="bg-linear-gradient(to right, #141384, #000000) text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Double Panna</p>
                <p>{gameRates['double_pana_val_1']}-{gameRates['double_pana_val_2']}</p>
              </div>

              <div className="bg-linear-gradient(to right, #141384, #000000) text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Tripple Panna</p>
                <p>{gameRates['tripple_pana_val_1']}-{gameRates['tripple_pana_val_2']}</p>
              </div>

              <div className="bg-linear-gradient(to right, #141384, #000000) text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Half Sangam</p>
                <p>{gameRates['half_sangam_val_1']}-{gameRates['half_sangam_val_2']}</p>
              </div>

              <div className="bg-linear-gradient(to right, #141384, #000000) text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
                <p>Jodi Digit</p>
                <p>{gameRates['full_sangam_val_1']}-{gameRates['full_sangam_val_2']}</p>
              </div>

              {/* Add similar blocks for other content */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default GameRates;
