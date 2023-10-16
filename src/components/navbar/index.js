import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import searchicon from "../../assets/searchicon.png";


const Navbar = () => {
    
    return (
  <nav class="bg-[#121113]">
      <div className='flex gap-2 justify-center items-center'>
          <img src={logo} alt='logo' />
          
        
        <ul className='flex m-auto gap-16'>
          <li className='hidden md:inline-block text-white'><Link href={'/'}>Discover</Link></li>
          <li className='hidden md:inline-block  text-white'><Link href={'/project-details'}>Explore</Link></li>
          <li className='hidden md:inline-block  text-white'><Link href={'/contact-us'}>Contact us</Link></li>
          <li className='hidden md:inline-block  text-white'><Link href={'/sign-in'}>Sign in</Link></li>
          <li className='hidden md:inline-block  text-white'><Link href={'/sign-up'}>Sign up</Link></li>
        </ul>
        <img src={searchicon} alt='searchicon' width='13px' height='13px' />
        <button class="bg-gradient-to-r from-[#69FEB0] to-[#5DE4F7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Connect Wallet    </button>
               </div>
 </nav>         
);
};

export default Navbar;