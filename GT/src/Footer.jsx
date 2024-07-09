import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";
import { BiDice6 } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';




const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-950 text-white text-center py-4 sticky bottom-0 w-full z-1">
      <div className="grid grid-cols-5 gap-6 pr-4 pl-4">
        <div className=''>
            <button className='px-2' onClick={()=>{navigate('/imp')}}>
            <FaHome className="w-6 h-5 ml-2"/> Home
            </button>
        </div>
        <div>
            <button>
            <FaHistory className="w-6 h-5 ml-2" onClick={()=>{navigate('/histories')}}/>
             History
            </button>
        </div>
        <div>
            <button>
            <CgProfile  className="w-6 h-5 ml-2" onClick={()=>{navigate('/profile')}}/>
             Profile
            </button>
        </div>
        <div>
            <button>
            <FaBook className="w-6 h-5 ml-2" onClick={()=>{navigate('/transaction')}}/>
             Passbook
            </button>
        </div>
        <div>
            <button>
            <BiDice6  className="w-6 h-5 ml-2" onClick={()=>{navigate('/imp4')}}/>
             Bids
            </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;