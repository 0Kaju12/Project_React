import useTransaction from "../Hooks/useTransaction";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import topBackground from "../Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import close from "../Images/close.png";
import open from "../Images/play.png";
import { useNavigate } from "react-router-dom";

function Transaction() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const unique = useSelector((state) => state.userDetail.token);
  const resinfo = useTransaction(unique);
  console.log(resinfo);
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "auto ", // Set the height of the div
    width: "100%", // Set the width of the div
    paddingTop:'50px', 
    paddingBottom:'900px'
  };
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  

  useEffect(() => {
    if (resinfo && resinfo["transaction_history"]) {
      setStatus(true);
      setGameRates(resinfo["transaction_history"]);
    } else {
      setStatus(false);
      setGameRates([]);
    }
  }, [resinfo]);
  // console.log(gameRates);
  console.log('sumti')
  console.log(gameRates);
  const navigate = useNavigate();
  const back = () => {
    navigate("/imp7");
  }
  return (
    <>
    <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          {/* <img src={fund} alt="Wallet" /> */}
          <h1 className="text-white px-3">Wallet History</h1>
        </div>
      </div>
    <div style={topStyle}>
      <div className="">
        {gameRates.map((game, index) => (
          <div key={index} className="mb-8">
            <div className="border-white text-white mr-2 ml-4 p-2 py-4 flex justify-between rounded-3xl border">
              <div>
                <img
                  className=""
                  src={game.transaction_type === '1' ? open : close}
                  alt=""
                />
              </div>
              <div>
                <p>{game?.transaction_note}</p>
                <p className="mt-2">{game?.insert_date}</p>
              </div>
              <div>
                <p>{game?.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Transaction;
