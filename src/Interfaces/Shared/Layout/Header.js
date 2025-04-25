import React, { useState } from 'react';
import close from '../../../Assets/logo/close.png';
import menu from '../../../Assets/logo/hamburger.png';
import { NavLink } from 'react-router-dom';
import Home from '../../../Assets/logo/home (1).png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Header = () => {
  
  const [isToggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!isToggleOn);
  };

  const handleClose = () => {
    setToggleOn(false);
  };

  return (
    <div className='bg-gradient-to-r from-blue-800 to-indigo-900 shadow-xl px-3 mt-2 lg:w-[95vw] rounded-full flex items-center justify-between py-4 lg:container mx-auto'>
      <div className='hamBuger md:hidden mx-3'>
        <img src={menu} alt="menu" className='w-6 h-6' onClick={handleToggle} />
      </div>

      <div className='leftNav flex items-center gap-8 ml-3'>
        <NavLink to='/'>
          <div className="logo flex gap-2 text-xl cursor-pointer items-center rounded-full py-1 px-3" data-aos="fade-right">
            <h1 className='bg-purple-950 rounded-3xl text-white p-1 h-8 w-8'>CV</h1>
            <h1 className='text-white font-bold font-sans'>Maker</h1>
          </div>
        </NavLink>
      </div>

      <div className={`center flex flex-col items-center justify-center gap-7 ${isToggleOn ? 'z-50 transition-all duration-700 ease-in-out absolute top-0 left-0 w-[80vw] h-full bg-gradient-to-r from-blue-200 to-cyan-200' : 'hidden md:flex md:flex-col md:relative md:gap-3'}`}>
        {isToggleOn && (
          <img src={close} alt="close" className='w-5 absolute top-5 right-5' onClick={handleClose} />
        )}

        <div className={`NavList flex list-none gap-3 items-center justify-center ${isToggleOn ? 'flex-col' : 'flex-row'}`}>
          <li className='relative px-4 py-2 rounded cursor-pointer group hover:text-slate-300 text-white' data-aos="flip-left">
            <NavLink onClick={handleClose} to='/'><img src={Home} alt="" color='white' width='30px'/></NavLink>
          </li>
         
        </div>
      </div>
     
    </div>
  );
};

export default Header;
