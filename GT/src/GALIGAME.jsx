import topBackground from "./Images/bg.png";
import chart from "./Images/chart.png";
import close from "./Images/close.png";
import open from "./Images/play.png";
import { useEffect, useState } from "react";
import useStarline from "./Hooks/useStarline";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TimerStar from "./TimerStar";
import useGaliGameFront from "./Hooks/useGaliGameFront";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import classNames from "classnames";
function GALIGAME() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([{}]);
  const unique = useSelector((state) => state.userDetail.token);

  const centerstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-4px",
  };
  const laststyle = {
    height: "7px",
    gap: "7px",
  };
  const imgstyle = {
    width: "40px",
    height: "auto",
    marginTop: "-4px",
  };
  const resinfo = useGaliGameFront();
  useEffect(() => {
    if (resinfo && resinfo["result"]) {
      setStatus(true);
      setGameRates(resinfo["result"]);
    }
  }, [resinfo]);

  // console.log(resinfo['result']);

  console.log(gameRates);

  // console.log(resinfo);
  const navigate = useNavigate();

  return (
    <div>
      {gameRates.map((game) => (
        <div key={game.game_id} className="mb-5 shadow-md rounded border py-2">
          <div className="font-bold text-sm text-center">
            {game.game_name}
            </div>
          <div className=" flex items-center justify-evenly font-bold ">
            <div>
              <p className="text-black font-bold -mt-2">
                {game.open_result ? `${game.open_result}` : "**"}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              
              <div
                className={classNames(
                  "text-xs flex justify-center items-center font-bold",
                  {
                    "text-red-600": game.msg_status === 2,
                    "text-green-600": game.msg_status === 1,
                  }
                )}
              >
                {game.msg_status === 2 ? "MARKET CLOSED" : "MARKET RUNNING"}
              </div>
              <div className="flex justify-center items-center mb-2">
                <p className="text-black font-bold text-xs">
                  Open - {game.open_time}
                </p>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => {
                  // console.log(game.msg_status)
                  if (game.msg_status === 1) {
                    navigate("/galiallgame", {
                      state: {
                        gameId: game.game_id,
                        openTime: game.open_time,
                        gameName: game.game_name,
                      },
                    });
                  }
                }}
              >
                {game.msg_status === 1 ? (
                  <FaPlay className="text-2xl text-green-600" />
                ) : (
                  <FaStop className="text-2xl text-red-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default GALIGAME;

{
  /* <div className="flex justify-between items-center pt-1 pl-2 pr-2 pb-7 ml-2 mr-6 h-15 rounded-xl border border-white text-white"style={{background:"linear-gradient(to right, #141384, #0000)"}}>
            <p className="top-0 right-0">{game.game_name}</p>
            
          </div>
          <div className="bg-white mr-2 ml-7 z-2 -mt-6 p-1 flex flex-col rounded-2xl border " style={{height:"60px"}}>
            
            <div style={centerstyle}>
              <div className="mt-5 ml-4">
                <p className="text-blue-900 font-bold">{game.open_result
                  ? `${game.open_result}`
                  : "**"}</p>
              </div>
              <div

              >
                <div                className={`text-${
                  game.msg_status === 2 ? "red" : "green"
                }-700 text-sm flex justify-center items-center font-bold  flex-col`}>
                {game.msg_status === 2 ? "MARKET CLOSED" : "MARKET RUNNING"}
                </div>

              <div className="flex justify-center items-center text-black pt-3" style={laststyle}>
                <p className="font-bold">Open Time : {game.open_time}</p>
              </div>
              </div>
              <button
                onClick={() => {
                  // console.log(game.msg_status)
                  if (game.msg_status === 1) {
                    navigate("/galiallgame", {
                      state: {
                        gameId: game.game_id,
                        openTime: game.open_time,
                        gameName: game.game_name,
                      },
                    });
                  }
                }}
               className="mt-4">
                <img
                  src={game.msg_status === 2 ? close : open}
                  style={imgstyle}
                  alt=""
                />
              </button>
            </div>

          </div> */
}
