import { BiArrowBack } from "react-icons/bi";
import WalletIcon from "../Images/wallet.png";
import topBackground from "../Images/main_bg.png";
import transf from "../Images/transfer_img.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Util/loginSlice";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TransferModel from "./TransferModel";
import useWallet from "../Hooks/useWallet";

function Transfer() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    paddingBottom: "400px",
  };
  const cardStyle = {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };
  const back = () => {
    navigate("/imp");
  };
  const phoneno = useRef();
  const points = useRef();
  const token = useSelector((state) => state.userDetail.token);
  const mobile = useSelector((state) => state.userDetail.mobile);
  const [formErrors, setFormErrors] = useState({});
  const [errorText, setErrorText] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
    rerenderPage(); // Trigger a rerender when the modal is closed
  };
  const [transactionData, setTransactionData] = useState({});
  const [walletAmt, setWalletAmt] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(
      phoneno.current.value,
      points.current.value,
      mobile
    );

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const result = await fetchData(
        phoneno.current.value,
        points.current.value,
        token
      );
      if (result?.status === true) {
        setTransactionData(result); // Set transaction data from API response
        console.log(transactionData);
        setIsSubmit(true);
        setShowModal(true); // Show the transaction model
      } else {
        throw new Error("Invalid username and password");
      }
    } catch (error) {
      setErrorText("Username or password incorrect"); // Set error message
    }
  };

  const validate = (phoneno, points, mobile) => {
    const errors = {};
    const regex = /^[6-9]{1}[0-9]{9}$/;

    if (!phoneno) {
      errors.phoneno = "Phone No is required!";
    } else if (!regex.test(phoneno)) {
      errors.phoneno = "Phone.No is not Valid!";
    } else if (phoneno === mobile) {
      errors.phoneno = "Don't Use Your Own Phone No.";
    }

    if (!points) {
      errors.points = "Points is required!";
    } else if (points < 100) {
      errors.points = "Points Must be More than 100";
    }
    return errors;
  };

  const fetchData = async (phoneno, points, token) => {
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
      mobile_no: phoneno,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://kalyanmilanofficialmatka.in/api-check-user-for-transfer-amt",
      requestOptions
    );
    return await response.json();
  };
  

  const res = useWallet(token);
  useEffect(() => {
    if (res && res.wallet_amt) {
      setWalletAmt(res.wallet_amt);
    }
  }, [res.wallet_amt]);

  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={back}>
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">Single Digit</h1>
        </div>

        <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <img
                src={WalletIcon}
                alt="Wallet Icon"
                className="w-8 h-8 mr-2"
              />
              <span>{res?.wallet_amt}</span>
            </a>
          </li>
        </ul>
      </div>

      <div
        style={backStyle}
        className="text-white flex flex-col justify-center items-center pt-5"
      >
        <form onSubmit={handleSubmit} style={cardStyle}>
          <input
            className="py-3 px-5 my-2 rounded-xl text-black"
            placeholder="Enter Points"
            type="text"
            ref={points}
          />
          <p className="text-red-500">{formErrors.points}</p>
          <input
            className="py-3 px-5 my-2 rounded-xl text-black"
            placeholder="Enter Number"
            type="text"
            ref={phoneno}
          />
          <p className="text-red-500">{formErrors.phoneno}</p>
          <div className=" flex justify-center items-center">
            <button
              className="py-3 px-2 w-48  bg-green-400 items-center my-4 rounded-xl "
              type="submit"
            >
              Transfer
            </button>
            {showModal && (
              <TransferModel
                closeModal={closeModal}
                points={points.current.value}
                name={transactionData.user_name} // Pass name from transactionData
                number={phoneno.current.value} // Pass number from transactionData
              />
            )}
          </div>
        </form>
        <div className="  mt-16 bg-white items-center w-auto p-2 rounded-xl">
          <img className="w-48 h-48" src={transf} alt="" />
        </div>
        <p className="mt-2">Fill your Amount And Number To</p>
        <p className="items-center ">Transfer The Fund</p>
      </div>
    </>
  );
}
export default Transfer;
