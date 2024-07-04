import { useSelector } from "react-redux";
import close from "../Images/close.png";
import open from "../Images/play.png";
import useWithdraw from "../Hooks/useWithdraw";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import topBackground from "../Images/bg.png";

function WithdrawHistory() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const mobile = useSelector((state) => state.userDetail.mobile);
  const unique = useSelector((state) => state.userDetail.token);
  const resinfo = useWithdraw(unique, mobile);
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
  const navigate = useNavigate();

  useEffect(() => {
    if (resinfo && resinfo["withdrawdata"]) {
      setStatus(true);
      setGameRates(resinfo["withdrawdata"]);
    } else {
      setStatus(false);
      setGameRates([]);
    }
  }, [resinfo]);
  const back = () => {
    navigate("/imp8");
  }
  return (
    <>
    
    <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          {/* <img src={fund} alt="Wallet" /> */}
          <h1 className="text-white px-3">Withdraw History</h1>
        </div>
      </div>
    <div style={topStyle}>
      <div className="">
        {gameRates.map((game, index) => (
          <div key={index} className="mb-8">
            <a href={game?.payment_receipt} target="_blank" rel="noopener noreferrer">
              <div className="border-white text-black mr-2 ml-4 p-2 py-4 flex flex-col bg-white rounded-3xl border">
                <div>
                  <p>
                    <span className="font-bold">Id:</span> {game?.request_number}
                  </p>
                </div>
                <div className="flex justify-between align-top ">
                  <div className="flex flex-col">
                    <p >
                      <span className="font-bold">Payment Method:</span> 
                      {game?.google_pay_number && "Google Pay"}
                      {game?.phone_pay_number && "PhonePe"}
                      {game?.paytm_number && "Paytm"}
                      {!game?.google_pay_number &&
                        !game?.phone_pay_number &&
                        !game?.paytm_number &&
                        "N/A"}
                    </p>
                    <p> {game?.insert_date}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-yellow-600"> {game?.request_amount}</p>
                    <p>{game?.request_status === "0" ? "Pending" : "true"}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default WithdrawHistory;
