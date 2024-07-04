import WalletIcon from "../Images/wallet.png";
import HamburgerIcon from "../Images/Hamburger.png";
import "./LandingNavbar.css";
import React, { useState, useEffect, useRef, useMemo } from "react";
import sidebarBackground from "../Images/bg.png";
import logoutImg from "../Images/logout.png";
import logo from "../Images/logo.png";
import call24 from "../Images/call_24.png";
import Home from "../Images/home.png";
import profile from "../Images/profile.png";
import AddFund from "../Images/add.png";
import Wallet from "../Images/wallet.png";
import WinHistory from "../Images/win_history.png";
import BidHistory from "../Images/bid_history.png";
import Rating from "../Images/rating.png";
import Share from "../Images/share.png";
import ChangePass from "../Images/reset_pass.png";
import lock_icon from "../Images/lock_icon.png";
import user_profile from "../Images/user_profile.png";
import question from "../Images/question.png";
import website from "../Images/website.png";
import share_icon from "../Images/share_icon.png";
import policy from "../Images/policy.png";
import telegram_icon from "../Images/telegram_icon.png";
import acc from "../Images/acc.png";
import { NavLink, useNavigate } from "react-router-dom";

function LandingNavbar() {
  const Hamburg = {
    transform: "translateY(3px)",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
  const sidebarStyle = {
    backgroundImage: `url(${sidebarBackground})`,
    backgroundSize: "cover",
    /* Add other background properties as needed */
  };

  const [isBackdropActive, setBackdropActive] = useState(false);
  const [isSidebarActive, setSidebarActive] = useState(false);
  const navigate = useNavigate();

  const handleHamburgerClick = () => {
    setBackdropActive(!isBackdropActive);
    setSidebarActive(!isSidebarActive);
  };
  const handleBackdropClick = () => {
    setBackdropActive(!isBackdropActive);
    setSidebarActive(!isSidebarActive);
  };

  const handlelogout = () => {
    navigate("login");
  };
  const handleClick = () => {
    // window.location.href = resinfo1['web_starline_chart_url'];
    window.open('https://sattamatkaofficials.com/uploads/images/GT_1718623233.apk', '_blank');
  };
  

  return (
    <nav className="bg-custom-purple text-white relative p-2">
      <div className="container mx-auto flex  flex-1 justify-between items-center">
        <div className="flex items-center ">
          <div onClick={handleHamburgerClick} style={Hamburg} className="mr-4">
            <img src={HamburgerIcon} alt="Hamburger Icon" className="w-8 h-8" />
          </div>

          <div className="text-xl fading-text">
            <div className="w-40 flex items-center">
              <marquee scrollamount="4"> SATTA MATKA OFFICIALS</marquee>
            </div>
          </div>

          <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
            <li className="flex items-center">
              <NavLink to="login" className="text-white flex items-center">
                <span>Login</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          onClick={handleBackdropClick}
          className={isBackdropActive ? "backdrop--active" : "backdrop"}
        ></div>
        <div
          className={isSidebarActive ? "sidebar--active" : "sidebar"}
          style={sidebarStyle}
        >
          <div className="px-6 pt-4">
            {/* User Info */}
            <div
              className="mb-4 flex items-center justify-center   "
              onClick={handleClick}
            >
              <button className=" text-xl font-bold  py-1 px-4 bg-amber-400 text-black  rounded-xl ">
                {"Download APP"}
              </button>
              {/* <div className="text-xl font-bold ml-5 bg-yellow-400 p-2 rounded-xl">{"Download APP"}</div> */}
            </div>
            {/* Logout Button */}
            <div className="flex justify-center mt-8">
              <button
                className="flex items-center justify-center text-white font-bold rounded-full w-10 h-10 mx-2"
                onClick={handlelogout}
              >
                <img
                  src={call24} // Replace with the path to your Button 1 image
                  alt="Button 1"
                  className="w-full h-full object-cover"
                />
              </button>
              <div className="flex items-center mx-2">
                <img src={logo} alt="Center Image" className="w-22 h-24" />
              </div>
              <button
                className="flex items-center justify-center hover:bg-green-700 text-white font-bold rounded-full w-10 h-10 mx-2"
                onClick={handlelogout}
              >
                <img
                  src={telegram_icon} // Replace with the path to your Button 1 image
                  alt="Button 1"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
          <ul className="space-y-1.5">
            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
                onClick={handleBackdropClick}
              >
                <img
                  src={Home}
                  alt="Home"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={profile}
                  alt="Add Funds"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={AddFund}
                  alt="Add Funds"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Add Funds
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Wallet}
                  alt="Wallet"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Wallet
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={WinHistory}
                  alt="Win History"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Win History
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={BidHistory}
                  alt="Bid History"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Bid History
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={question}
                  alt="How To Play"
                  className="w-8 h-8 mr-2 inline-block"
                />
                How To Play
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Rating}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Game Rates
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Rating}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Rate our App
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={website}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Visit our Website
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Rating}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Mail us
              </NavLink>
            </li>

            <li>
              <a
                href="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={share_icon}
                  alt="Share"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Share our App
              </a>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={ChangePass}
                  alt="Change Password"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Change Password
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={policy}
                  alt="Privacy Policy"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={user_profile}
                  alt="User Profile"
                  className="w-8 h-8 mr-2 inline-block"
                />
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={logoutImg}
                  alt="User Profile"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(LandingNavbar);
