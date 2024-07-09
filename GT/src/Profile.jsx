import { Link, Navigate, useNavigate } from "react-router-dom";
import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import profile from "./Images/profile.png";
import user_profile from "./Images/user_profile.png";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./Util/loginSlice";

import { FaUser } from "react-icons/fa";

function Profile() {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const back = () => {
    navigate("/imp");
  };

  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };

  const backStyle = {
    // backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const userContainer = {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const userStyle = {
    width: "40px",
    height: "40px",
  };

  const buttonStyle = {
    marginTop: "20px",
  };
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const vertical = {
    width: "1px",
    height: "46px",
    backgroundColor: "white",
    marginLeft: "14px",
  };

  const username = useSelector((state) => state.userDetail.username);
  const mobile = useSelector((state) => state.userDetail.mobile);
  const unique_token = useSelector((state) => state.userDetail.token);
  const [formErrors, setFormErrors] = useState({});
  const name = useRef();

  const dispatch = useDispatch();

  const handleAdduser = (username_, unique_token, mobile) => {
    console.log(username_);
    dispatch(
      login({ username: username_, token: unique_token, mobile: mobile })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(name.current.value);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      await fetchData(name.current.value, unique_token, mobile); // Pass the current value of the name ref
      setIsSubmit(true);
    } catch (error) {
      console.error("Error occurred during data fetching:", error);
    }
  };

  const validate = (name) => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required!";
    }
    return errors;
  };

  const fetchData = async (name, unique_token, mobile) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee"
    );

    const raw = JSON.stringify({
      env_type: "Prod",
      app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
      unique_token: "un5ChwLA8EJqiLqCBolQwC0gY31AAL",
      user_name: name,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://kalyanmilanofficialmatka.in/api-profile-update",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log(result);
        handleAdduser(name, unique_token, mobile);
        navigate("/imp");
      } else {
        // Response is not JSON, extract JSON data from HTML response
        const text = await response.text();
        const startIndex = text.indexOf("{");
        const endIndex = text.lastIndexOf("}") + 1;
        const jsonData = text.substring(startIndex, endIndex);
        const result = JSON.parse(jsonData);
        console.log(result);
        handleAdduser(name, unique_token, mobile);
        navigate("/imp");
      }
    } catch (error) {
      console.error("Error occurred during data fetching:", error);
    }
  };

  return (
    <>
      <div>
        
          <div
            style={buttonStyle}
            className="border  shadow-md w-84 pl-2 h-80 flex flex-col  items-center justify-center "
          >
          <div className="flex   items-center justify-center">
              <FaUser className="w-10 h-8 -mt-10 mr-2" />
            
            <div className="flex flex-col items-center justify-center">
              <p className="text-black font-bold mb-2">{username}</p>
              <p className="text-black font-bold mb-2">{mobile}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 mt-2 w-32 py-2 text-white font-bold  rounded"
                onClick={toggleInput}
              >
                Edit
              </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex  justify-center items-center">
                {showInput }
                {showInput }
                <div className="">
                  {showInput && (
                    <input
                      type="text"
                      ref={name}
                      placeholder="Enter Your Name"
                      className="mt-8 mb-4 py-2 px-2  border-b bg-transparent text-black"
                    />
                  )}
                </div>
              </div>

              <div>
                <p className="text-red-500">{formErrors.name}</p>
              </div>
              {showInput && (
                <button
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 mt-2 rounded"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
      </div>
    </>
  );
}

export default Profile;
