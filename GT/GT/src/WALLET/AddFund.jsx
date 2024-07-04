import topBackground from "../Images/bg.png";
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

  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "auto ",
    width: "100%",
    paddingBottom: "150px",
  };

  const box1 = {
    border: "3px solid #ccc",
    padding: "10px",
    width: "300px",
    margin: "auto",
    borderRadius: "10px",
    background: "linear-gradient(to right, #141384, #000000)",
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
      <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={back}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          {/* <img src={fund} alt="Wallet" /> */}
          <h1 className="text-white px-3">Add Fund</h1>
        </div>
      </div>

      <div className="" style={topStyle}>
        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",

            marginBottom: "12px",
          }}
        >
          <button onClick={() => navigate("/depositrule")}>
            <img src={deposit_rules_btn} />
          </button>
        </div>
        <div className="mt-1" style={box1}>
          <p>Current Balance</p>
          <p>RS {res.wallet_amt}</p>
        </div>
        <div className="flex justify-center items-center">
          {/* <p className="text-white mb-2">Or</p> */}
        </div>
        <div style={box4}>{/* </button> */}</div>
        <QR_PAY />
        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",

            marginBottom: "px",
          }}
        >
          <button onClick={() => navigate("/addfundhistory")}>
            <img src={deposit_history_btn} />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddFunds;
