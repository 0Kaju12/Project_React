import topBackground from "../Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "../Images/wallet_transparent.png";
import phone_pe from "../Images/phone_pe.png";
import gpay from "../Images/gpay.png";
import frame from "../Images/frame_addfund.png";
import paytm from "../Images/paytm.png";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../PaymentModel.jsx";
import { useState, useEffect } from "react";
import useWallet from "../Hooks/useWallet.jsx";
import { useSelector } from "react-redux";
import wallet_history_btn from "../Images/wallet_history_btn.png";

function Wallet() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "100vh ", // Set the height of the div
    width: "100%", // Set the width of the div
    padding: "",
  };

  const box1 = {
    border: "3px solid #ccc",
    padding: "10px",
    // Adjust the width as needed
    margin: "auto",
    borderRadius: "10px", // Add border-radius for rounded corners
    background: "linear-gradient(to right, #141384, #000000)", // Blue gradient background
    color: "#fff", // Text color
    marginBottom: "20px",
    height: "100px",
  };

  const box2 = {
    width: "80px",
    // padding: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
    borderRadius: "20px",
    height: "85px",
  };

  const Container = {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
  };

  const Container1 = {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    // gap: "15px",
    justifyContent: "center",
    alignItems: "center",
  };

  const box3 = {
    borderRadius: "10px",
    padding: "8px 12px 8px 9px",
    alignItems: "center", // Align items to the start (top) of the container
    width: "auto",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };

  const radioImageStyle = {
    width: "25px", // Adjust the width as needed
  };

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate();

  const back = () => {
    navigate("/imp");
  };

  const addf = () => {
    navigate("/imp9");
  };

  const withd = () => {
    navigate("/imp8");
  };

  const trans = () => {
    navigate("/transfer");
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = async (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOption(null);
  };
  const unique = useSelector((state) => state.userDetail.token);
  console.log(unique);

  const res = useWallet(unique);
  useEffect(() => {
    if (res && res.wallet_amt) {
      // setWalletAmt(res.wallet_amt);
    }
  }, [res.wallet_amt]);

  return (
    <>
      <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          {/* <img src={fund} alt="Wallet" /> */}
          <h1 className="text-white px-3">Wallet</h1>
        </div>
      </div>
      <div className=" p-5" style={topStyle}>
        <div className="p-5 sm:w-auto md:max-w-lg lg:max-w-lg" style={box1}>
          <p>Current Balance</p>
          <p>RS {res.wallet_amt}</p>
        </div>

        <div style={Container}>
          <div>
            <button onClick={() => addf()} className="bg-red-700" style={box3}>
              + Add Fund
            </button>
          </div>
          <div>
            <button
              onClick={() => withd()}
              className="bg-orange-500"
              style={box3}
            >
              - Withdraw Fund
            </button>
          </div>

          <div>
            <button
              className="bg-teal-500"
              style={box3}
              onClick={() => trans()}
            >
              Transfer
            </button>
          </div>
        </div>
        <div className="border border-white rounded-md w-80 m-auto mt-2 mb-2">
          {" "}
          <div className="" style={box4}>
            {/* <img src={frame} alt="" /> */}
            <p className="font-bold text-white text-center px-1 ">
              PLEASE SELECT WITHDRAW METHOD HERE
            </p>
          </div>
          <div
            style={Container1}
            className=" w-80 m-auto px-0 pb-2"
          >
            <div className="mr-6">
              <button style={box2} onClick={() => handleClick("1")}>
                <img src={phone_pe} alt="PhonePe" style={radioImageStyle} />
                PhonePe
              </button>
            </div>
            <div className="mr-6">
              <button style={box2} onClick={() => handleClick("2")}>
                <img
                  className="mb-1 mt-2"
                  src={paytm}
                  alt="PhonePe"
                  style={radioImageStyle}
                />
                Paytm
              </button>
            </div>

            <div>
              <button style={box2} onClick={() => handleClick("3")}>
                <img src={gpay} alt="PhonePe" style={radioImageStyle} />
                GPay
              </button>
              {showModal && (
                <PaymentModal closeModal={closeModal} option={selectedOption} />
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",

            marginBottom: "20px",
          }}
        >
          <button onClick={() => navigate("/transaction")}>
            <img src={wallet_history_btn} />
          </button>
        </div>

        {/* <p className="mt-4 text-center text-white">Transactions</p> */}
      </div>
    </>
  );
}

export default Wallet;
