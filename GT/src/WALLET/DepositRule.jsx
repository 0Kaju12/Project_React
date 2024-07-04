import useRule from "../Hooks/useRule";
import topBackground from "../Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function DepositRule(){

    const topStyle = {
        backgroundImage: `url(${topBackground})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        paddingBottom: "300px",
        paddingTop: "10px",
      };
      const navbarStyle = {
        height: "60px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      };
      const navigate = useNavigate();

      const [status, setStatus] = useState(false);
      const [gameRates, setGameRates] = useState([]);
      const resinfo = useRule();
      
      useEffect(() => {
        if (resinfo && resinfo["content"]) {
          setStatus(true);
          setGameRates(resinfo["content"]);
        } else {
          setStatus(false);
          setGameRates([]);
        }
      }, [resinfo]);

    return (
        <>
         <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={() => navigate('/imp9')}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          <h1 className="text-white px-3">Deposit Rule</h1>
        </div>
      </div>
      <div style={topStyle}>
        <div className="text-white ">
          {status && gameRates.length > 0 && gameRates[0].deposit_rule.split('\n').map((line, index) => (
            <p className="mb-4"key={index}>{line}</p>
          ))}
        </div>
      </div>
      </>
    );
}

export default DepositRule;
