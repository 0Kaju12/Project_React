import React, { useMemo } from "react";
import LandingNavbar from "./LandingNavbar";
import LandingTop from "./LandingTop";
import LandingGameFRONT from "./LandingGameFRONT";
import topBackground from '../Images/bg.png';


function LandingImp() {
  const topStyle = {
    // backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: 'auto',
    width: '100%',
    paddingBottom:'20px'
  };

  const memoizedNavbar = useMemo(() => <LandingNavbar />, []);
  const memoizedTop = useMemo(() => <LandingTop />, []);

  return (
    <>
    <div className="relative">

        {memoizedNavbar}
        {memoizedTop}
      

      <div className="" style={topStyle}>
        {/* <GameFRONT /> */}
        <LandingGameFRONT/>
        
      </div>

    {/* <Footer/> */}

    </div>
  </>
  );
}

export default LandingImp;
