import topBackground from "./Images/bg.png";
import chart from "./Images/chart.png";
import close from "./Images/close.png";
import open from "./Images/play.png";
import { useEffect, useState } from "react";
import useGameFront from "./Hooks/useGameFront";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Timer from "./Timer";

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

  const resinfo = useGameFront(unique);

  useEffect(() => {
    if (resinfo && resinfo["result"]) {
      setStatus(true);
      setGameRates(resinfo["result"]);
    }
  }, [resinfo]);

  const navigate = useNavigate();

  return (
    <div>
      {gameRates.map((game) => (
        <div key={game.game_id} className="mb-5">
          <div
            className=" flex justify-between items-center pt-1 pl-2 pr-2 pb-7 ml-2 mr-6 h-15 rounded-2xl border border-white text-white"
            style={{ background: "linear-gradient(to right, #141384, #0000)" }}
          >
            <p className="top-0 right-0">{game.game_name}</p>
            {game.open_time && game.close_time && game.msg_status === 1 ? (
              <Timer closeTime={game.close_time_srt} />
            ) : (
              "00:00:00"
            )}
          </div>
          <div className="bg-white mr-2 ml-7 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-2xl border">
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
              <p className="text-blue-900 font-bold">
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
                className="text-green-700 font-bold p-4"
                style={{ fontSize: "12px" }}
              >
                Open - {game.open_time}
              </p>
              <p
                className="text-red-700 font-bold"
                style={{ fontSize: "12px" }}
              >
                Close - {game.close_time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameFRONT;
