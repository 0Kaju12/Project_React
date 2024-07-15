import topBackground from "./Images/bg.png";
import chart from "./Images/chart.png";
import close from "./Images/close.png";
import open from "./Images/play.png";
import { useEffect, useState } from "react";
import useGameFront from "./Hooks/useGameFront";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Timer from "./Timer";
import games_bg from "./Images/games_bg.jpg";
import { FcStart } from "react-icons/fc";
import { FaStop } from "react-icons/fa";
import classNames from "classnames";
import { FaPlay } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

function GameFRONT() {
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "7px",
    gap: "13px",
  };
  const imgstyle = {
    width: "40px",
    height: "auto",
    marginTop: "-4px",
  };
  const bgStyle = {
    backgroundImage: `url(${games_bg})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto", // Adjust based on your layout needs
    width: "auto",
  };
  const resinfo = useGameFront(unique);

  useEffect(() => {
    if (resinfo && resinfo["result"]) {
      setStatus(true);
      setGameRates(resinfo["result"]);
    }
  }, [resinfo]);

  const navigate = useNavigate();

  return (
    <div className="px-5 mt-2">
      {gameRates.map((game) => (
        <div key={game.game_id} className="mb-5 border  shadow-md rounded   ">
          <div className="flex items-center justify-evenly">
            <div>
              <a
                href={game.web_chart_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src={chart} className="w-10 h-auto mt-1" alt="Chart" />
                 */}
                 <FaChartSimple className="text-2xl text-yellow-600"/>
              </a>
            </div>
            <div className=" flex flex-col justify-center items-center text-xs">
              <div className="flex items-center justify-center font-bold text-xs">
                <p className="pr-3">{game.game_name}</p>
                {game.open_time && game.close_time && game.msg_status === 1 ? (
                  <Timer closeTime={game.close_time_srt} />
                ) : (
                  "00:00:00"
                )}
              </div>
              <div>
                <div
                className={classNames(
                  "text-xs flex justify-center items-center font-bold",
                  {
                    "text-red-700": game.msg_status === 2,
                    "text-green-700": game.msg_status === 1,
                  }
                )}
                >
                  {game.msg_status === 2 ? "MARKET CLOSED" : "MARKET RUNNING"}
                </div>
              </div>
              <div>
                <p className="text-yellow-600 font-bold">
                  {game.open_result
                    ? game.close_result
                      ? `${game.open_result}${game.close_result}`
                      : `${game.open_result}****`
                    : "***_**_***"}
                </p>
              </div>
              <div className="flex justify-center items-center mb-2">
                <p className="text-green-500 font-bold mr-12 text-xs">
                  Open - {game.open_time}
                </p>
                <p className="text-red-500 font-bold  text-xs">
                  Close - {game.close_time}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  if (game.msg_status === 1) {
                    navigate("/game", {
                      state: {
                        gameId: game.game_id,
                        openTime: game.open_time,
                        gameName: game.game_name,
                      },
                    });
                  }
                }}
              >
              {game.msg_status ===1 ? <FaPlay className="text-2xl text-green-600" />: <FaStop className="text-2xl text-red-600"/>}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameFRONT;

{
  /* <div key={game.game_id} className="mb-5">
          <div
            className=" flex justify-center items-center pt-1 pl-2 pr-4 pb-7 ml-10 mr-6 h-15 rounded-2xl border border-white text-white"
            style={{ background: "linear-gradient(to right, #141384, #0000)" }}
          >
            <p className="pr-3">{game.game_name}</p>
            {game.open_time && game.close_time && game.msg_status === 1 ? (
              <Timer closeTime={game.close_time_srt} />
            ) : (
              "00:00:00"
            )}
          </div>
          <div className="bg-white mr-2 ml-7 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-2xl border" style={bgStyle}>
            <div
              className={`text-${
                game.msg_status === 2 ? "red" : "green"
              }-700 text-sm flex justify-center items-center font-bold`}
            >
              {game.msg_status === 2 ? "MARKET CLOSED" : "MARKET RUNNING"}
            </div>
            <div style={centerstyle}>
              <div>
                <a href={game.web_chart_url} target="_blank">
                  <img src={chart} style={imgstyle} alt="" />
                </a>
              </div>
              <p className="text-white font-bold">
  {game.open_result
    ? game.close_result
      ? `${game.open_result}${game.close_result}`
      : `${game.open_result}****`
    : "***_**_***"}
</p>

              <button
                onClick={() => {
                  if (game.msg_status === 1) {
                    navigate("/game", {
                      state: {
                        gameId: game.game_id,
                        openTime: game.open_time,
                        gameName: game.game_name,
                      },
                    });
                  }
                }}
              >
                <img
                  src={game.msg_status === 2 ? close : open}
                  style={imgstyle}
                  alt=""
                />
              </button>
            </div>
            <div style={laststyle}>
              <p
                className="text-green-500 font-bold p-4"
                style={{ fontSize: "12px" }}
              >
                Open - {game.open_time}
              </p>
              <p
                className="text-red-500 font-bold"
                style={{ fontSize: "12px" }}
              >
                Close - {game.close_time}
              </p>
            </div>
          </div>
        </div> */
}
