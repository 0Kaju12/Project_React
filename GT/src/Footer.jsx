import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';




const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-950 text-white text-center py-4 sticky bottom-0 w-full z-1">
      <div className="grid grid-cols-5 gap-6 pr-4 pl-4">
        <div className=''>
            <button className='px-2' onClick={()=>{navigate('/imp')}}>
            <FaHome className="w-6 h-6 ml-2"/> Home
            </button>
        </div>
        <div>
            <button onClick={()=>{navigate('/histories')}}>
            <FaHistory className="w-6 h-6 ml-2" />
             History
            </button>
        </div>
        <div>
            <button onClick={()=>{navigate('/profile')}}>
            <FaCircleUser  className="w-6 h-6  ml-2" />
             Profile
            </button>
        </div>
        <div>
            <button onClick={()=>{navigate('/transaction')}}>
            <FaBook className="w-6 h-6 ml-3" />
             Passbook
            </button>
        </div>
        <div>
            <button onClick={()=>{navigate('/imp4')}}>
            <FaDiceFour  className="w-6 h-6 ml-1" />
             Bids
            </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;