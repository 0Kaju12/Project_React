import logo from "./Images/BG__.jpeg";
// import topBackground from "./Images/bg.png";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "./Util/registerSlice";

function Register() {
  
  const cardStyle = {
    width: "375px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    position: "relative",
  };

  const username = useRef();
  const phoneno = useRef();
  const password = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);

    const errors = validate(
      username.current.value,
      phoneno.current.value,
      password.current.value
    );

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const otpData = await fetchData(phoneno.current.value);
      if (otpData?.status) {
        dispatch(register({ 
          username: username.current.value, 
          phone: phoneno.current.value, 
          password: password.current.value, 
          otp: otpData?.otp 
        }));
        navigate('/Otp');
      } else {
        setErrorMsg("Failed to fetch OTP data");
      }
    } catch (error) {
      setErrorMsg("Error registering: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validate = (username, phoneno, password) => {
    const errors = {};
    const regex = /^[6-9]{1}[0-9]{9}$/;
    if(!username){
      errors.username="Username is required";
    }
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

  const fetchData = async (phoneno) => {
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
        "https://khatrimatka.online/api-check-mobile",
        requestOptions
      );
      const result = await response.json();
      if (result?.status) {
        setIsSubmit(true);
        return result;
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-black ">
        
        
          <form style={cardStyle} className="p-5 shadow-md z-4 mt-2 m-auto" onSubmit={handleSubmit}>
          <div className="flex justify-center item-center">
          <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Center Image "  className="w-40 h-40 rounded-xl" />
          <h1 className="font-bold text-2xl">Signup</h1>
          </div>
        </div>
            <p className="">Username</p>
            <input
              type="text"
              placeholder="Username"
              
              className="border border-black pt-3 pr-7 pl-5 pb-3 rounded"
              ref={username}
              name="username"
            />
            <p className="text-red-500">{formErrors.username}</p>
            <div className="relative -top-14">
              {formErrors.username && (
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

            <p className="">Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-black pt-3 pr-7 pl-5 pb-3 rounded"
              ref={phoneno}
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
              className="border border-black pt-3 pr-15 pl-5 pb-3 rounded"
              name="password"
            />
            <p className="text-red-500">{formErrors.password}</p>
            <p className="text-red-500">{errorMsg}</p>
            <div className="relative -top-14">
              <button
                type="button"
                className={`absolute ${
                  formErrors && errorMsg ? "top-0" : "top-6"
                } right-4`}
                onClick={handleToggleCurrentPassword}
              >
                {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="flex justify-center mb-5">
              <button
                className="p-3 border border-black-500 rounded mt-4 text-white bg-yellow-600 hover:bg-yellow w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </div>
            <div className="flex justify-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link> 
              </p>
            </div>
          </form>
        </div>
      {/* </div> */}
    </>
  );
}

export default Register;
