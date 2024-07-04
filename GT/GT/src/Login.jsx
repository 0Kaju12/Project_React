import logo from "./Images/logo.png";
import { BiArrowBack } from "react-icons/bi";
import topBackground from "./Images/bg.png";
import { FiEye, FiEyeOff, FiLock, FiAlertCircle } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import whatsapp from "./Images/whatsapp.png";
import call from "./Images/call_helpline.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Util/loginSlice";
import { addPass } from "./Util/passslice";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const backStyle = {
    paddingBottom: "500px",
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
  };
  const cardStyle = {
    width: "370px",
    display: "flex",
    flexDirection: "column",
    padding: "",
    position: "relative",
  };
  const cellImageStyle = {
    maxWidth: "150px",
    maxHeight: "150px",
    objectFit: "cover",
  };

  const phoneno = useRef();
  const password = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [errorText, setErrorText] = useState(""); 
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const navigate = useNavigate();

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const dispatch = useDispatch();

  const handleAdduser = (username_, unique_token, mobile, password) => {
    dispatch(addPass({ password: password }));
    dispatch(login({ username: username_, token: unique_token, mobile: mobile }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true); // Set submitting state to true

    const errors = validate(phoneno.current.value, password.current.value);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false); // Reset submitting state if there are validation errors
      return;
    }

    try {
      await fetchData(phoneno.current.value, password.current.value);
      setIsSubmit(true);
    } catch (error) {
      setErrorText("Username or password incorrect"); // Set error message
    } finally {
      setIsSubmitting(false); // Always reset submitting state after request is completed
    }
  };

  const validate = (phoneno, password) => {
    const errors = {};
    const regex = /^[6-9]{1}[0-9]{9}$/;

    if (!phoneno) {
      errors.phoneno = "Phone No is required!";
    } else if (!regex.test(phoneno)) {
      errors.phoneno = "Phone.No is not Valid!";
    }

    if (!password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  const CallButton = ({ phoneNumber, imgSrc }) => (
    <a href={`tel:${phoneNumber}`} >
      <img
        src={imgSrc}
        alt="Call Button"
        style={cellImageStyle}
      />
    </a>
  );
  const handleWhatsAppClick = () => {

      toast.error("You need to login first");
  };

  const fetchData = async (phoneno, password) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee");

    const raw = JSON.stringify({
      env_type: "Prod",
      app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
      device_id: "{{android_id}}",
      password: password,
      mobile: phoneno,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch("https://kalyanmilanofficialmatka.in/api-user-login", requestOptions);
    const result = await response.json();

    if (result?.status === true) {
      handleAdduser(result.user_name, result.unique_token, result.mobile, password);
      navigate('/imp');
    } else {
      throw new Error("Invalid username and password");
    }
  };

  return (
    <>
      <div style={backStyle} className="text-white flex flex-col justify-center items-center">
        <div className="flex justify-center items-center ">
          <img src={logo} alt="Center Image" className="w-40 h-40" />
        </div>
        <div style={cardStyle}>
          <form style={cardStyle} className="p-5" onSubmit={handleSubmit}>
            <p>Phone Number</p>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Phone Number"
              ref={phoneno}
              className="bg-gray-500 pt-3 pr-7 pl-5 pb-3 rounded"
              name="phoneno"
            />
            <p className="text-red-500">{formErrors.phoneno}</p>
            <div className="relative -top-14">
              {formErrors.phoneno && (
                <div
                  className="absolute top-0 right-2"
                  style={{
                    color: "red",
                  }}
                >
                  <FiAlertCircle />
                </div>
              )}
            </div>
            <p className="mt-2">Password</p>
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Password"
              ref={password}
              className="bg-gray-500 pt-3 pr-15 pl-5 pb-3 rounded"
              name="password"
            />
            <p className="text-red-500">{formErrors.password}</p>
            <div className="relative -top-14">
              <button
                type="button"
                className={`absolute ${
                  formErrors.password ? "top-0" : "top-5"
                } right-4`}
                onClick={handleToggleCurrentPassword}
              >
                {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative mb-5 mt-9">
              <p className="absolute right-0">Forgot Password ?</p>
            </div>
            {errorText && <p className="text-red-500">{errorText}</p>} {/* Render error message */}
            <div className="flex justify-center mb-5">
              <button
                className="p-3 border border-black-500 rounded mt-4 bg-blue-800 w-3/4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </button>
            </div>
            <div className="flex justify-center">
              <p>
                Don't Have an account ?{" "}
                <Link to="/r" className="text-yellow-500">
                  Register
                </Link>
              </p>
            </div>  
          </form>
          <div className="flex justify-between mt-2 pl-4">
            <div>
            <CallButton phoneNumber="+1234567890" className='' imgSrc={call} style={cellImageStyle}  />
             
            </div>
            <div className="mr-4">
              <button onClick={handleWhatsAppClick}>
                <img src={whatsapp} alt="Add Fund" style={cellImageStyle} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="mt-2">By logging in you are agree to these</p>
            <a href="" className="mb-2 text-green-500">
              Terms and Conditions and Privacy Policy
            </a>
            <hr className="w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
