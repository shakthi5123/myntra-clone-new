import React from 'react'
import { NavLink, Link } from "react-router-dom";
import playStore from "../assets/download-btn/playStore.png"
import AppStore from "../assets/download-btn/AppStore.png"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// import og from "../assets/download-btn/og.png"
// import ret from "../assets/download-btn/return.png"


export default function Footer() {
  return (
    <div className='flex bg-[#fafbfc] gap-6 px-35 py-10'>
      <div className=''>
        <h1 className='text-sm font-bold'>ONLINE SHOPPING</h1>
         <ul className='text-xs text-[#787985] mt-5 space-y-5' >
             <NavLink to="/men" className="text-[14px]"><li>Men</li></NavLink>
              <NavLink to="/women"><li className="mt-2">Women</li></NavLink>
              <NavLink to="/kids"><li className="mt-2">Kids</li></NavLink>
              <NavLink to="/home"><li className="mt-2">Home</li></NavLink>
              <NavLink to="/beauty"><li className="mt-2">Beauty</li></NavLink>
              <NavLink to="/genz"><li className='mt-2'>Genz</li></NavLink>

        </ul>

        <h1 className='text-sm font-bold mt-5'>USEFUL LINKS</h1>
        <ul className='text-xs text-[#787985] mt-3'>
          <li className="mt-2">Blog</li>
          <li className="mt-2">Careers</li>
          <li className="mt-2">Site Map</li>
          <li className="mt-2">Corporate Information</li>
          <li className="mt-2">Whitehat</li>
          <li className="mt-2">Cleartrip</li>
          <li className="mt-2">Myntra Global</li>
        </ul>
      </div>
      <div className=''>
        <h1 className='text-sm font-bold'>CUSTOMER POLICIES</h1>
        <ul className='text-xs text-[#787985] mt-5 '>
          <li className="mt-2">Contact Us</li>
          <li className="mt-2">FAQ</li>
          <li className="mt-2">T&C</li>
          <li className="mt-2">Terms of Use</li>
          <li className="mt-2">Track Orders</li>
          <li className="mt-2">Shipping</li>
          <li className="mt-2">Cancellation</li>
          <li className="mt-2">Returns</li>
          <li className="mt-2">Privacy policy</li>
          <li className="mt-2">Grievance Redressal</li>
        </ul>
      </div>

      <div>
        <h1 className='text-sm font-bold'>EXPERIENCE MYNTRA APP ON MOBILE</h1>
        <div className='flex w-32 mt-8 gap-3'>
          <img src={playStore} alt="" />
          <img src={AppStore} alt="" />
        </div>

        <div className='mt-5'>
          <h1>KEEP IN TOUCH</h1>
          <div className='flex gap-3 mt-2'>
             <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* <div className=' w-15'>
          <div className='flex'>
            <img src={og} alt="" />
            <p>100% ORIGINAL guarantee for all products at myntra.com</p>  
          </div>
          <div><img src={ret} alt="" /></div>
        </div> */}

      </div>

       
    </div>
  )
}
