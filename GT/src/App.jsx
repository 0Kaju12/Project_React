import './App.css'
import Navbar from './Navbar.jsx'
import Top from './Top.jsx' 
import Changepass from './Changepass.jsx'
import GameRates from './GameRates.jsx'
import Htp from './HowToPlay.jsx'
import Game from './Game.jsx'

import Single from './Games/Single.jsx'

import About from './About.jsx'
import Privacy from './Privacy.jsx'
import Delete from './Delete.jsx'
import Wallet from './WALLET/Wallet.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameFRONT from './GameFRONT.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Imp from './IMP.jsx'
import { Provider } from 'react-redux'
import appStore from "./Util/appStore"
import Starline from './Starline.jsx'
import Profile from './Profile.jsx'
import IMP2 from './IMP2.jsx'
import StarGame from './StarGame.jsx'
import StarSingle from './Stargame/StarSingle.jsx'
import Ssinglepana from './Stargame/Ssinglepana.jsx'
import Sdoublepana from './Stargame/Sdoublepana.jsx'
import Stripplepana from './Stargame/Stripplepana.jsx'
import FullSangam from './Games/FullSangam.jsx'
import HalfSangam from './Games/HalfSangam.jsx'
import TripplePana from './Games/TripplePana.jsx'
import SinglePana from './Games/SinglePana.jsx'
import DoublePana from './Games/DoublePana.jsx'
import LandingIMP from './LandingPage/LandingIMP.jsx'
import Jodi from './Games/Jodi.jsx'



import Windata from './WIN/Windata.jsx'
import IMP3 from './WIN/IMP3.jsx'
import Win from './WIN/Win.jsx'

import Biddata from './BID/Biddata.jsx'
import Bid from './BID/Bid.jsx'
import IMP4 from './BID/IMP4.jsx'

import IMP5 from './STARBID/IMP5.jsx'
import IMP6 from './STARWIN/IMP6.jsx'
import IMP7 from './WALLET/IMP7.jsx'
import Transaction from './WALLET/Transaction.jsx'
import MyModal from './ShowModal.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Transfer from './WALLET/Transfer.jsx'
import TransferModel from './WALLET/TransferModel.jsx'

import AddFunds from './WALLET/AddFund.jsx'
import WithdrawFunds from './WALLET/WithdrawFund.jsx'
import IMP8 from './WALLET/IMP8.jsx'
import IMP9 from './WALLET/IMP9.jsx'


import Otp from './Otp'
import Otp2 from './Otp2'
import GALIGAME from './GALIGAME.jsx'
import GALIIMP from './GALIIMP.jsx'
import IMPWIN from './Gali_WIN/IMPWIN.jsx'
import IMPBID from './Gali_BID/IMPBID.jsx'
import GaliAllGame from './GaliAllGame.jsx'
import LeftDigit from './Gali_games/LeftDigit.jsx'
import RightDigit from './Gali_games/RightDigit.jsx'
import JodiDigit from './Gali_games/JodiDigit.jsx'
import QR_PAY from './QR_PAY.jsx'
import AddFundHistory from './WALLET/AddFundHistroy.jsx'
import WithdrawRule from './WALLET/WithdrawRule.jsx'
import DepositRule from './WALLET/DepositRule.jsx'
import WithdrawHistory from './WALLET/WithdrawHistory.jsx'
import ScrollToTop from './ScrollToTop';
// import RightDigit from './Gali_games/RightDigit.jsx'



function App() {

  return (
    <>
     {/* <Navbar/>
    <Top/>  */}
    {/* <AddFunds/> */}
    {/* <Changepass/> */}
    {/* <GameRates/> */}

    {/* <Htp/> */}
    {/* <Game/> */}
    {/* <Single/> */}
    {/* <Bid/> */}
    {/* <Win/> */}
    <Provider store={appStore}>
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
        <Route path="/r" element={<> <Register/> </>}></Route>  
        <Route path="/star" element={<> <Starline/> </>}></Route>
        <Route path="/login" element={<> <Login/> </>}></Route>
        <Route path="/imp" element={<> <Imp/></>}></Route>
        <Route path="/otp" element={<> <Otp/></>}></Route>
        <Route path="/otp2" element={<> <Otp2/></>}></Route>
        <Route path="/" element={<> <LandingIMP/></>}></Route>
        <Route path="/addfund"  element={<AddFunds/>}> </Route>
        <Route path="/win"  element={<Win/>}> </Route>
        <Route path='/windata' element={<Windata/>}></Route>
        <Route path="/bid"  element={<Bid/>}> </Route>
        <Route path="/gameRates"  element={<GameRates/>}> </Route>
        <Route path="/game"  element={<Game/>}> </Route>
        <Route path="/htp"  element={<Htp/>}> </Route>

        <Route path='/imp3' element={<IMP3/>}></Route>
        <Route path='/imp4' element={<IMP4/>}></Route>
        <Route path='/imp5' element={<IMP5/>}></Route>
        <Route path='/imp6' element={<IMP6/>}></Route>
        <Route path='/imp7' element={<IMP7/>}></Route>
        <Route path='/imp8' element={<IMP8/>}></Route>
        <Route path='/imp9' element={<IMP9/>}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
        <Route path='/mymodel' element={<MyModal/>}></Route>
        <Route path='/transfer' element={<Transfer/>}></Route>
        <Route path='/transfermodel' element={<TransferModel/>}></Route>
        <Route path='/addfundhistory' element={<AddFundHistory/>}></Route>
        <Route path='/withdrawrule' element={<WithdrawRule/>}></Route>
        <Route path='/depositrule' element={<DepositRule/>}></Route>
        <Route path="/withdrawhistory"  element={<WithdrawHistory/>}> </Route>

        
        
        
        


      
        <Route path="/about"  element={<About/>}> </Route>
        <Route path="/privacy"  element={<Privacy/>}> </Route>
        <Route path="/delete"  element={<Delete/>}> </Route>
        <Route path="/change"  element={<Changepass/>}> </Route>
        <Route path="/wallet"  element={<Wallet/>}> </Route>
        <Route path="/profile" element={<> <Profile/> </>}></Route>
        <Route path='/imp2' element={<><IMP2/></>}></Route>
        <Route path="/withdraw"  element={<WithdrawFunds/>}> </Route>
        <Route path="/qrpay" element={<QR_PAY/>}></Route>
        {/* <Route path="/withdraw"  element={<AddFunds/>}> </Route> */}



        <Route path='/stargame' element={<><StarGame/></>}></Route>
        <Route path='/ssinglepana' element={<><Ssinglepana/></>}></Route>
        <Route path='/sdoublepana' element={<><Sdoublepana/></>}></Route>
        <Route path='/stripplepana' element={<><Stripplepana/></>}></Route>
        <Route path='/starsingle' element={<><StarSingle/></>}></Route>

        <Route path='/galigame' element={<><GALIGAME/></>}></Route>
        <Route path='/galiIMP' element={<><GALIIMP/></>}></Route>
        <Route path='/impwin' element={<><IMPWIN/></>}></Route>
        <Route path='/impbid' element={<><IMPBID/></>}></Route>
        <Route path='/galiallgame' element={<><GaliAllGame/></>}></Route>
        <Route path='/leftdigit' element={<><LeftDigit/></>}></Route>
        <Route path='/rightdigit' element={<><RightDigit/></>}></Route>
        <Route path='/jodidigit' element={<><JodiDigit/></>}></Route>
        {/* <Route path="/right"  element={<RightDigit/>}> </Route>   */}
        


        <Route path="/single"  element={<Single/>}> </Route>  
        <Route path='/fullsangam' element={<><FullSangam/></>}></Route>
        <Route path='/halfsangam' element={<><HalfSangam/></>}></Route>
        <Route path='/tripplepana' element={<><TripplePana/></>}></Route>
        <Route path='/doublepana' element={<><DoublePana/></>}></Route>
        <Route path='/singlepana' element={<><SinglePana/></>}></Route>
        <Route path='/jodi' element={<><Jodi/></>}></Route>


        {/* <Route path='/' element={<><Test/></>}></Route> */}

        
        
        
        </Routes>
      </BrowserRouter>
      </Provider>
      <ToastContainer />

    </>

  )
}

export default App
