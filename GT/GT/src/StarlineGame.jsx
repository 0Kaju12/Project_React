import topBackground from "./Images/bg.png";
import chart from "./Images/chart.png";
import close from "./Images/close.png";
import open from "./Images/play.png";
import { useEffect, useState} from "react";
import useStarline from "./Hooks/useStarline";
import { NavLink, useNavigate} from "react-router-dom";
import {  useSelector } from "react-redux";
import TimerStar from "./TimerStar";

function StarlineGame() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([{}]);
  const unique = useSelector(state =>state.userDetail.token)

  const centerstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-4px",
  };
  const laststyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const imgstyle = {
    width: "40px",
    height: "auto",
    marginTop: "-4px",
  };
  const resinfo = useStarline();
  useEffect(() => {
    if (resinfo && resinfo["result"]) {
      setStatus(true);
      setGameRates(resinfo["result"]);
    }
  }, [resinfo]);

  // console.log(resinfo['result']);

  console.log(gameRates);


  console.log(resinfo);
  const navigate = useNavigate();
  

  return (
    <div>
      {gameRates.map((game) => (
        <div key={game.game_id} className="mb-5">
          <div className="flex justify-between items-center pt-1 pl-2 pr-2 pb-7 ml-2 mr-6 h-15 rounded-xl border border-white text-white" style={{background:"linear-gradient(to right, #141384, #0000)"}}>
            <p className="top-0 right-0">{game.game_name}</p>
            {console.log(game.close_time)}
            {(game.open_time && game.close_time_srt && game.msg_status === 1  ) ? <TimerStar closeTime={game.close_time_srt} />:"00:00:00"}
          </div>
          <div className="bg-white mr-2 ml-7 z-2 -mt-7 p-2 pb-3  flex justify-center  flex-col rounded-2xl border">
            <div className="flex justify-center items-center">
              
                <p className={`text-${
                game.msg_status === 2 ? "red" : "green"
              }-700 text-sm  font-bold mt-2`}>{game.msg_status === 2 ? "MARKET CLOSED" : "MARKET RUNNING"}</p>
              
            </div>
            <div style={centerstyle}>
              <div className="text-blue-900 font-bold -mt-3">
              {game.open_result
                  ? `${game.open_result}`
                  : "***_*"}
              </div>
              <div>
                
              <p className=" font-bold"style={{ fontSize: '12px' }}>Open Time - {game.open_time}</p>

              </div>
              <button
                onClick={() => {
                  // console.log(game.msg_status)
                  if (game.msg_status === 1) {
                    navigate("/stargame", { state: { gameId: game.game_id, openTime:game.open_time , gameName: game.game_name} });
                  }
                }}
              className="-mt-3">
                <img
                  src={game.msg_status === 2 ? close : open}
                  style={imgstyle}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default StarlineGame;
