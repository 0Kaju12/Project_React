import React, { useMemo } from "react";
import Navbar from "./Navbar";
import Top from "./Top";
import GameFRONT from "./GameFRONT";
import topBackground from './Images/main_bg.png';
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Footer from './Footer'; 

function Imp() {
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: 'auto',
    width: '100%',
    paddingBottom:'20px'
  };

  const memoizedNavbar = useMemo(() => <Navbar />, []);
  const memoizedTop = useMemo(() => <Top />, []);
  const token = useSelector(state => state.userDetail.token);
  const username = useSelector(state => state.userDetail.token);
  // console.log(username);
  // console.log(token);
  return (
    <>
      <div className="relative">

          {memoizedNavbar}
          {memoizedTop}
        

        <div className="" style={topStyle}>
          <GameFRONT />
          
        </div>

      <Footer/>

      </div>
    </>
  );
}

export default Imp;
