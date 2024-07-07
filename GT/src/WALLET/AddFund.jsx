import topBackground from "../Images/main_bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "../Images/wallet_transparent.png";
import phone_pe from "../Images/phone_pe.png";
import gpay from "../Images/gpay.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useUpiOption from "../Hooks/useUpiOtion";
import { useSelector } from "react-redux";
import useWallet from "../Hooks/useWallet";
import deposit_history_btn from "../Images/deposit_history_btn.png";
import deposit_rules_btn from "../Images/deposit_rules_btn.png";
import QR_PAY from "../QR_PAY";
import { BsFileEarmarkRuledFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";

function AddFunds() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(0);
  const navigate = useNavigate();

  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const cardStyle = {
    width: "370px",
    display: "flex",
    flexDirection: "column",
    padding: "",
    position: "relative",
  };

  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "auto ",
    width: "100%",
    paddingBottom: "250px",
  };

  const box1 = {
    // border: "3px solid #ccc",
    padding: "10px",
    width: "300px",
    margin: "auto",
    // borderRadius: "10px",
    // background: "linear-gradient(to right, #141384, #000000)",
    color: "#fff",
    marginTop: "-24px",
  };

  const buttonStyle = {
    padding: "10px",
    background: "#061050",
    color: "#fff",
    cursor: "pointer",
  };

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const mobile = useSelector((state) => state.userDetail.mobile);
  const unique = useSelector((state) => state.userDetail.token);
  const resinfo = useUpiOption(unique, mobile);
  console.log("sumit");
  console.log(resinfo);

  const backendValue = "Value from Backend";
  const back = () => {
    navigate("/imp");
  };

  const handleAddFunds = () => {
    setCurrentBalance((prevBalance) => prevBalance + parseInt(amountToAdd));
    setAmountToAdd(0); // Reset input field after adding funds
  };

  const res = useWallet(unique);
  useEffect(() => {
    if (res && res.wallet_amt) {
      // setWalletAmt(res.wallet_amt);
    }
  }, [res.wallet_amt]);

  return (
    <>
    <div className="relative flex items-center justify-center m-auto " style={topStyle}>
    <div style={cardStyle} >
      <div className="font-bold text-lg items-center justify-center flex mt-4">
      <h1 >Add Funds</h1>
      </div>
      <div className="flex items-center font-bold justify-center  mt-4 mb-2">
        <button className="w-1/2 border mr-2 py-2 flex  bg-white rounded-xl cursor-pointer" onClick={() => navigate("/depositrule")}>
          <p className="mr-5 ml-2">Deposit Rule</p>
         <BsFileEarmarkRuledFill className="h-6 w-12" />
         </button>
        <button className="w-1/2 border ml-2 py-2 flex  bg-white rounded-xl cursor-pointer " onClick={() => navigate("/addfundhistory")}>
        <p className="mr-0 ml-2">Deposit History</p>
        <FaHistory className="h-6 w-12" />
        </button>
      </div>
      <div>
      <QR_PAY />

      </div>
      <div>

      </div>
    </div>
    </div>
      
    </>
  );
}

export default AddFunds;


{/* <div className="text-black ">
        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",

            marginBottom: "12px",
          }}
        >
          <button
            onClick={() => navigate("/depositrule")}
            className="flex font-bold  justify-evenly items-center p-2 py-3 rounded-xl hover:bg-blue-500 bg-blue-700 text-white border-none mb-2 "
          >
            <p className="mr-5 ml-2">Deposit Rule</p>
            <BsFileEarmarkRuledFill className="h-6 w-12" />
          </button>
        </div>
        <div
          style={box1}
          className=" mt-1 text-black font-bold border-4 rounded-xl border-black "
        >
          <p className="text-black">Current Balance</p>
          <p className="text-black">RS {res.wallet_amt}</p>
        </div>
        <QR_PAY />
        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",

            marginBottom: "px",
          }}
        >
          <button
            onClick={() => navigate("/addfundhistory")}
            className="flex font-bold  justify-evenly items-center  p-2 py-3 rounded-xl hover:bg-blue-500 bg-blue-700 text-white border-none mb-2 "
          >
            <p className="mr-5 ml-2">Deposit History</p>
            <FaHistory className="h-6 w-12" />
          </button>
        </div>
      </div> */}