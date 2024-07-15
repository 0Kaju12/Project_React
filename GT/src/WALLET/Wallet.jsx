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
import { FaHistory } from "react-icons/fa";

function Wallet() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  // const topStyle = {
  //   backgroundImage: `url(${topBackground})`,
  //   backgroundSize: "cover",
  //   height: "100vh ", // Set the height of the div
  //   width: "100%", // Set the width of the div
  //   padding: "",
  // };

  const box1 = {
    // border: "3px solid #ccc",
    padding: "10px",
    // Adjust the width as needed
    margin: "auto",
    // borderRadius: "10px", // Add border-radius for rounded corners
    // background: "linear-gradient(to right, #141384, #000000)", // Blue gradient background
    // color: "#fff", // Text color
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
    // borderRadius: "20px",
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

      <div className=" p-5 text-black z-4 shadow-md m-auto ">
        <div style={Container} className="">
          {/* <div>
            <button
              onClick={() => addf()}
              className=" rounded-xl bg-yellow-600 hover:bg-yellow-500"
              style={box3}
            >
              + Add Fund
            </button>
          </div>
          <div>
            <button
              onClick={() => withd()}
              className=" rounded-xl bg-yellow-600 hover:bg-yellow-500"
              style={box3}
            >
              - Withdraw Fund
            </button>
          </div>


          <div>
            <button
              className=" rounded-xl bg-yellow-600 hover:bg-yellow-500"
              style={box3}
              onClick={() => trans()}
            >
              Transfer
            </button>
          </div> */}
        </div>
        <div className="flex flex-col  items-center justify-center" >
  <div onClick={() => addf()} className="bg-yellow-600 text-white hover:bg-yellow-500  mb-4 h-10 w-80 border flex items-center justify-evenly rounded z-4 hover:shadow-lg shadow-md"><button  className="flex  py-2 px-1  "><p className="font-bold">Add Fund</p> </button> </div>
  <div onClick={() => withd()} className="bg-yellow-600 text-white hover:bg-yellow-500  mb-4 h-10 w-80 border flex items-center justify-evenly rounded z-4 hover:shadow-lg shadow-md"><button  className="flex  py-2 px-1  "><p className="font-bold">Withdraw Fund</p> </button> </div>
  <div onClick={() => trans()} className="bg-yellow-600 text-white hover:bg-yellow-500  mb-4 h-10 w-80 border flex items-center justify-evenly rounded z-4 hover:shadow-lg shadow-md"><button  className="flex  py-2 px-1  "><p className="font-bold">Transfer</p> </button> </div>
  <div onClick={() => navigate("/transaction")} className="bg-yellow-600 text-white hover:bg-yellow-500  mb-4 h-10 w-80 border flex items-center justify-evenly rounded z-4 hover:shadow-lg shadow-md"><button  className="flex  py-2 px-1  "><p className="font-bold">Wallet History</p> </button> </div>
  </div>
        <div className="border rounded-xl w-80 m-auto mt-2 mb-2">
          {" "}
          <div className="" style={box4}>
            {/* <img src={frame} alt="" /> */}
            <p className="font-bold text-black text-center px-1 ">
              PLEASE SELECT WITHDRAW METHOD HERE
            </p>
          </div>
          <div style={Container1} className=" w-80 m-auto px-0 pb-2">
            <div className="mr-6">
              <button
                className="border-2 border-black rounded-xl"
                style={box2}
                onClick={() => handleClick("1")}
              >
                <img src={phone_pe} alt="PhonePe" style={radioImageStyle} />
                PhonePe
              </button>
            </div>
            <div className="mr-6">
              <button
                className="border-2 border-black rounded-xl"
                style={box2}
                onClick={() => handleClick("2")}
              >
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
              <button
                className="border-2 border-black rounded-xl"
                style={box2}
                onClick={() => handleClick("3")}
              >
                <img src={gpay} alt="PhonePe" style={radioImageStyle} />
                GPay
              </button>
              {showModal && (
                <PaymentModal closeModal={closeModal} option={selectedOption} />
              )}
            </div>
          </div>
        </div>

        

        {/* <p className="mt-4 text-center text-white">Transactions</p> */}
      </div>
    </>
  );
}

export default Wallet;
