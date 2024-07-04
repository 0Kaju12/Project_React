import Navbar from "./Navbar";
import Top from "./Top";
import GameFRONT from "./GameFRONT";
import topBackground from './Images/bg.png';
import { Provider } from "react-redux";
import Starline from "./Starline";
import StarlineGame from "./StarlineGame";


function IMP2(){
    const topStyle = {
        backgroundImage: `url(${topBackground})`,
        backgroundSize: 'cover',
        height: 'auto', // Set the height of the div
        width: '100%', // Set the width of the div
        paddingBottom:'20px'
      };
    return (
        <>
        <div className="relative">
        <div className="sticky top-0">
        <Starline/>
        </div>
        
      <div className="" style={topStyle}>

        <StarlineGame/>
        {/* <GameFRONT/> */}

      </div>
      </div>

        </>
    );
}

export default IMP2;