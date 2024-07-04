import topBackground from "../Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "../Images/wallet_transparent.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // Combined import statements
import usePayment from "../Hooks/usePayment";
import { useSelector } from "react-redux";
import useWallet from "../Hooks/useWallet";

// import { useRef } from "react";
import withdraw_history_btn from "../Images/withdraw_history_btn.png";
import withdraw_rules_btn from "../Images/withdraw_rules_btn.png";

function WithdrawFunds() {
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
    width: "100%",
    padding: "",
  };

  const box1 = {
    border: "3px solid #ccc",
    padding: "10px",
    width: "300px",
    margin: "auto",
    borderRadius: "10px",
    background: "linear-gradient(to right, #141384, #000000)",
    color: "#fff",
    marginBottom: "",
  };

  const enterAmount = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ffffff",
    display: "flex",
    background: "linear-gradient(to right, #141384, #000000)",
    width: "300px",
  };

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"-4px"
  };
  const box5 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"-28px",
    marginBottom:"4px"
  };

  const btnStyle = {
    background: "#E5B80B",
    width: "200px",
    padding: "7px",
    borderRadius: "15px",
    marginTop:"-14px"
  };

  const amount = useRef();
  const [method2, setMethod] = useState("");
  const token = useSelector((state) => state.userDetail.token);
  const number = useSelector((state) => state.userDetail.mobile);
  const [formErrors, setFormErrors] = useState({});
  const [errorText, setErrorText] = useState("");
  const [selectedUPI, setSelectedUPI] = useState("");
  const [gamesUpi, setGamesUpi] = useState([]);

  const [walletAmt, setWalletAmt] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const navigate = useNavigate();
  const res = usePayment(token, number);
  const res2 = useWallet(token);

  useEffect(() => {
    if (res2 && res2.wallet_amt) {
      setWalletAmt(res2.wallet_amt);
    }
  }, [res2.wallet_amt]);

  useEffect(() => {
    if (res?.result) {
      setGamesUpi(res.result);
    }
  }, [res.result]);

  useEffect(() => {
    if (gamesUpi.length > 0) {
      setMethod(gamesUpi[0]?.type);
    }
  }, [gamesUpi]);

  const back = () => {
    navigate("/imp");
  };

  const handleUPIChange = (event) => {
    setSelectedUPI(event.target.value);
    const selectedUpiType = gamesUpi.find(
      (upi) => upi.value === event.target.value
    )?.type;
    setMethod(selectedUpiType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true); // Set submitting state to true

    const errors = validate(amount.current.value, Number(walletAmt));
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false); // Reset submitting state if there are validation errors
      return;
    }

    try {
      await fetchData(token, Number(amount.current.value), number, method2);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false); // Always reset submitting state after request is completed
    }
  };

  const validate = (amount, walletAmt) => {
    const errors = {};
    if (!amount) {
      errors.amount = "Amount is required!";
    } else if (amount > walletAmt) {
      errors.amount = "Wallet Limit Exceeded";
    }
    return errors;
  };

  const fetchData = async (token, amount, number, method2) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append(
      "Cookie",
      "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee"
    );

    const raw = JSON.stringify({
      env_type: "Prod",
      app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
      unique_token: token,
      mobile: number,
      request_amount: amount,
      payment_method: method2,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://kalyanmilanofficialmatka.in/api-user-withdraw-fund-request",
      requestOptions
    );
    const result = await response.json();
    if (result?.status === true) {
      setErrorText("");
    } else {
      setErrorText(result?.msg);
    }
  };

  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          {/* <img src={fund} alt="Wallet" /> */}
          <h1 className="text-white px-3">Withdraw Fund</h1>
        </div>
      </div>

      <div className=" p-5" style={topStyle}>
        <div
          style={{
            background: "white",
            width: "300px",
            margin: "auto",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <p className="text-red-500 mt-2 py-2 pl-2">
            Withdraw Timings :- 07:00AM -10:00AM
          </p>
          <p className="text-red-500 ">{errorText}</p>
        </div>
        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",
            marginTop: "-14px",
            marginBottom: "2px",
          }}
        >
          <button onClick={() => navigate("/withdrawrule")}>
            <img src={withdraw_rules_btn} />
          </button>
        </div>
        <div className="" style={box1}>
          <p>Current Balance</p>
          <p>RS {walletAmt}</p>
        </div>

        <div className="flex flex-col" style={box4}>
          <input
            type="text"
            placeholder="Enter Points"
            ref={amount}
            className="placeholder-white text-white mb-2"
            style={enterAmount}
          />

          <p className="text-red-500 ">{formErrors.amount}</p>
        </div>
        <div style={box5}>
          <select
            className="text-white"
            value={selectedUPI}
            onChange={handleUPIChange}
            style={enterAmount}
          >
            {gamesUpi.length === 0 ? (
              <option value="" disabled>
                Please set the method From Wallet First
              </option>
            ) : (
              gamesUpi.map((upi, index) => (
                <option key={index} value={upi.value} className="text-black">
                  {upi?.name}: {upi?.value}
                </option>
              ))
            )}
          </select>
        </div>
        <div style={box4} className="flex flex-col ">
          <button
            className="text-white rounded"
            style={btnStyle}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Withdraw Now"}
          </button>
          <p className="text-red-500 ">{errorText}</p>
        </div>
        <div
          style={{
            padding: "10px",
            width: "250px",
            margin: "auto",

            marginBottom: "20px",
          }}
        >
          <button onClick={() => navigate("/withdrawhistory")}>
            <img src={withdraw_history_btn} />
          </button>
        </div>
      </div>
    </>
  );
}

export default WithdrawFunds;
