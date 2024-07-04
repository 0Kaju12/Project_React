import { Link, Navigate, useNavigate } from "react-router-dom";
import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import starMarker from "./Images/strline_market.png";
import useStarGameRate from "./Hooks/useStarGameRate";
import useStarline from "./Hooks/useStarline";
import { useState, useEffect } from "react";
import useGaliGameRates from "./Hooks/useGaliGameRates";
import useGaliGameFront from "./Hooks/useGaliGameFront";
function GALIRATES() {
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover", // This will make the background image cover the container without
    paddingBottom: "10px",
    paddingTop: "0px"
  };
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const btnStyle = {
    background: "linear-gradient(to right, #141384, #000000)",
    width: "150px",
    padding: "7px",
    borderRadius: "15px",
    margin: "20px 10px 0 0px",
  };

  const box1 = {
    alignItems: "center",
    justifyContent: "center",
  };

  const priceStyle = {
    background: "linear-gradient(to right, #141384, #000000)",
    height: "140px",
    width: "500px",
    margin: "20px 10px 0 30px",
    borderRadius: "20px",

    
  };

  const marker = {
    margin: "20px 20px -20px 20px",
    display: "flex",
    justifyContent: "center",
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/imp");
  };
  const handleClick = () => {
    window.open(resinfo1['web_galidessar_chart_url'], '_blank');
  };

  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const [status1, setStatus1] = useState(false);
  const [gameRates1, setGameRates1] = useState([]);
  const resinfo = useGaliGameRates();
  const resinfo1 = useGaliGameFront();
  useEffect(() => {
    if (resinfo1 && resinfo1["result"]) {
      setStatus1(true);
      setGameRates1(resinfo1["result"]);
    }
  }, [resinfo1]);
  console.log(resinfo1)
  useEffect(() => {
    if (resinfo && resinfo["game_rates"]) {
      setStatus(true);
      setGameRates(resinfo["game_rates"][0]);
    }
  }, [resinfo]);

  return (
    <>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={() => back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 text-lg">Gali Diswar Game</h1>
          </div>
        </div>
        <div>
          <div style={backStyle}>
            <div className="w-120">
              <div className="flex " style={box1}>
                <button
                  className="text-white rounded border border-white  "
                  style={btnStyle}
                  onClick={() => navigate("/impbid")}
                >
                  Bid History
                </button>
                <button
                  className="text-white rounded border border-white  "
                  style={btnStyle}
                  onClick={() => navigate("/impwin")}
                >
                  WIN History
                </button>
                <button
                  className="text-white rounded border border-white"
                  style={btnStyle}
                  onClick={handleClick}
                >
                  CHART
                </button>
              </div>
              <div className="flex justify-center align-items-center">
                <div style={priceStyle} className="px-5  pt-2 text-white border border-white ">
                  <div className="flex flex-row justify-between p-2">
                    <p>Left Digit</p>
                    <p>:-</p>
                    <p>
                      {gameRates["single_digit_val_1"]}-
                      {gameRates["single_digit_val_2"]}
                    </p>
                  </div>

                  <div className="flex flex-row justify-between p-2">
                    <p>Right Digit</p>
                    <p>:-</p>
                    <p>
                      {gameRates["single_pana_val_1"]}-
                      {gameRates["single_pana_val_2"]}
                    </p>
                  </div>

                  <div className="flex flex-row justify-between p-2">
                    <p>Jodi Digit</p>
                    <p>:-</p>
                    <p>
                      {gameRates["double_pana_val_1"]}-
                      {gameRates["double_pana_val_2"]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GALIRATES;
