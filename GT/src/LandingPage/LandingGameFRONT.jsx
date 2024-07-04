import chart from "../Images/chart.png";
import close from "../Images/close.png";
import open from "../Images/play.png";
import { useEffect, useState } from "react";
import useGameFront from "../Hooks/useGameFront";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Timer from "../Timer";

function LandingGameFRONT() {
  const centerstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-4px",
  };
  const laststyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "7px",
    gap: "7px",
  };
  const imgstyle = {
    width: "40px",
    height: "auto",
    marginTop: "-4px",
  };

  const navigate = useNavigate();

  const games = [
    "Kalyan Morning",
    "Madhur Morning",
    "Sridevi",
    "Time Bazar",
    "Madhur Day",
    "Milan Day",
    "Rajdhani Day",
    "Supreme Day",
    "Kalyan",
    "Sridevi Night",
    "Madhur Night",
    "Supreme Night",
    "Milan Night",
    "Kalyan Night",
    "Rajdhani Night",
    "Main Bazar",
  ];

  return (
    <div>
      {games.map((game) => (
        <div className="mb-5" key={game}>
          <div
            className="flex justify-between justify-center items-center pt-1 pl-2 pr-2 pb-7 ml-2 mr-6 h-15 rounded-2xl border border-white text-white"
            style={{ background: "linear-gradient(to right, #141384, #0000)" }}
          >
            <p className="top-0 right-0">{game}</p>
            {/* 00:00:00 */}
          </div>
          <div className="bg-white mr-2 ml-7 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-2xl border">
            <div className="flex justify-between items-end py-2">
              <div>
                <img src={chart} style={imgstyle} alt="Chart" />
              </div>
              <div className="text-green-700 font-bold text-lg flex justify-center items-center">
                Login To Play
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <img src={open} className="mt-1" style={imgstyle} alt="Open" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LandingGameFRONT;
