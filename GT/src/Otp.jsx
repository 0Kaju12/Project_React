import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import logo from "./Images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import OtpInput from "otp-input-react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./Util/loginSlice";
import { register, remove } from "./Util/registerSlice";

function Otp() {
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [data, setdata] = useState({});
  const [data2, setdata2] = useState(null);
  // const[otp2, setotp2]=useState(null);

  const username = useSelector((state) => state.registerDetail.username);
  const mobile = useSelector((state) => state.registerDetail.phone);
  const password = useSelector((state) => state.registerDetail.password);
  const otp2 = useSelector((state) => state.registerDetail.otp);
  // console.log(username);
  // console.log(mobile);
  // console.log(password);
  // console.log(otp2);

  // console.log(otp2);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const handleAdduser = (username, token, mobile) => {
     console.log(username);
     console.log(token)
    dispatch(login({ username: username, token: token, mobile: mobile }));
    dispatch(remove());
  };
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const [otp, setOtp] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Entered OTP:", otp);
      console.log("OTP from Redux (otp2):", otp2);
      console.log("OTP from data2:", data2);
  
      // Check if the entered OTP matches either the OTP received from the server (otp2) or the data2
      if (otp == otp2 || otp == data2) {
        console.log("OTP is valid. Proceeding with form submission...");
        setIsSubmit(true);
        const a = await fetchData(username, mobile, password);
        handleAdduser(a?.user_name, a?.unique_token, mobile);
        navigate("/imp");
      } else {
        console.log("Entered OTP does not match the expected OTPs.");
        setErrorMsg("Enter Valid OTP");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  

  const fetchData = async (username, mobile, password) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        env_type: "Prod",
        app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
        name: username,
        email: "email",
        password: password,
        mobile: mobile,
        security_pin: "123456",
        device_id: null,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://kalyanmilanofficialmatka.in/api-user-registration",
        requestOptions
      );
      const result = await response.json();
      // console.log(result);
      setdata(result);
      return result;
    } catch (error) {}
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    setCounter(30);

    try {
      await fetchResendOtp(username, mobile, password);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  const fetchResendOtp = async (username, phoneno, password) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        env_type: "Prod",
        app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
        mobile: phoneno,
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      const response = await fetch(
        "https://kalyanmilanofficialmatka.in/api-resend-otp",
        requestOptions
      );
      const result = await response.json();
      console.log("resend");
      console.log(result?.otp);
      setdata2(result?.otp); // Ensure data2 is correctly updated here
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <>
      <div style={backStyle}>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={() => back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 text-lg">OTP</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="Center Image" className="w-40 h-40" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white mt-4 text-3xl">OTP Verification</p>
          <p className="text-white mt-4">
            Enter the code from the SMS we sent to
          </p>
          <div className="text-white">+91 {mobile}</div>
          {counter > 0 && (
            <div className="text-white mt-5">Resend OTP in: 00 : {counter}</div>
          )}
          <OtpInput
            value={otp}
            onChange={setOtp}
            otpType="number"
            disabled={false}
            autoFocus
            className="mt-5 ml-4"
          />
          <div className="text-gray-500" style={{ margin: "30px 20px 0 0" }}>
            I didn't receive any code.{" "}
            {counter === 0 && (
              <button className="ml-3 text-red-500 font-bold" onClick={handleResendOtp}>
                RESEND
              </button>
            )}
          </div>
          <p className="text-red-500">{errorMsg}</p>
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded "
            style={{ marginTop: "30px" }}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default Otp;
