import { BiArrowBack } from "react-icons/bi";
import topBackground from "./Images/bg.png";
import { useNavigate } from "react-router-dom";
import GameRates from "./GameRates";
import { useState, useEffect } from "react";
import useQRPAY from "./Hooks/useQRPAY";
import { FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import what from "./Images/whatsapp2.png";
import { useSelector } from "react-redux";
import useGameFront from "./Hooks/useGameFront";
// import { useNavigate } from "react-router-dom";

function QR_PAY() {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px",
    marginTop: "-28px"
  };
  const back = () => {
    navigate("/addfund");
  };
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);

  const resinfo = useQRPAY();

  useEffect(() => {
    if (resinfo && resinfo["qrdata"]) {
      setStatus(true);
      setGameRates(resinfo["qrdata"][0]);
    }
  }, [resinfo]);
  console.log(gameRates);
  console.log(gameRates.upi_id);

  
  const unique = useSelector((state) => state.userDetail.token);
  const resinfo1 = useGameFront(unique);
  const [status1, setStatus1] = useState(false);
  const [gameRates1, setGameRates1] = useState([{}]);

  useEffect(() => {
    if (resinfo1 && resinfo1["mobile_1"]) {
      setStatus1(true);
      setGameRates1(resinfo1["mobile_1"]);
    }
  }, [resinfo1]);
  console.log(gameRates1)
  
  const phoneNumber = gameRates1;

  const [copied, setCopied] = useState(false);
  const textToCopy = gameRates.upi_id;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <>

      <div className=" text-white text-lg" >
        <div style={cardStyle}>
          <p className="font-bold mt-1">Pay & Send the Screenshot </p>
          <p className="font-bold">With Registered Mobile Number</p>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-bold mt-1"> Scan & Pay</p>
            <img className="h-32 w-36 mt-1" src={gameRates.qr_image} alt="" />
          </div>

          <div className=" flex  justify-between items-center border w-80  border-l-zinc-50 rounded-lg p-2 mt-4">
            <p>{gameRates.upi_id}</p>
            <CopyToClipboard text={textToCopy} onCopy={() => setCopied(true)}>
              <button>
                <FaRegCopy />
              </button>
            </CopyToClipboard>
            <p>{copied && <span style={{ color: "green" }}>Copied!</span>}</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-1 mb-1 text-lg font-bold">
            <p>Send transaction Successful </p>
            <p>Screenshot on whatsapp</p>
          </div>

          <div className="  text-red-500 bg-white px-8 py-1 rounded-xl mt-1">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer " className="flex justify-center items-center font-bold">
              Send Screeenshot
              <img src={what} alt=""  className="ml-2"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default QR_PAY;
