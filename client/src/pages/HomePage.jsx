import React from 'react'
import { NavLink } from 'react-router-dom'
// hero
import hero1 from "../assets/hero-img/hero1.webp"
import hero2 from "../assets/hero-img/hero2.webp"
import hero3 from "../assets/hero-img/hero3.webp"
import hero4 from "../assets/hero-img/hero4.webp"
import hero5 from "../assets/hero-img/hero5.webp"
import hero6 from "../assets/hero-img/hero6.webp"
import hero7 from "../assets/hero-img/hero7.gif"
import BudgetItem from '../components/BudgetItem'
import OmgDeals from '../components/OmgDeals'
import Category from '../components/Category'
import Footer from '../components/Footer'




export default function HomePage() {
  return (
    <div className='mt-7'>
      <NavLink to="/men">
        <img src={hero1} alt="coupon" />
      </NavLink>

      <div className='flex mt-3 max-w-[83rem]  mx-auto items-center'>
        {/* women banner */}
        <NavLink to="/women">
          <img src={hero2} alt=""  />
        </NavLink>
        {/* men banner  */}
        <NavLink to="/men">
          <img src={hero3} alt="" />
        </NavLink>
      </div>

      {/* Promotional banner  */}
      <div className='flex max-w-[83rem] mx-auto items-center '>
          <a href="https://www.myntra.com/us-polo-assn.?sort=popularity&rawQuery=Us%20Polo%20Assn">
            <img src={hero4} alt="" />
          </a>
          <a href="https://www.myntra.com/puma?sort=popularity&p=1">
            <img src={hero5} alt="" />
          </a>
          <a href="https://www.myntra.com/jack-and-jones?sort=popularity&f=Categories%3AJackets%2CJeans%2CLounge%20Pants%2CLounge%20Tshirts%2CShirts%2CSweaters%2CSweatshirts%2CTrack%20Pants%2CTrousers%2CTshirts%3A%3AGender%3Amen%2Cmen%20women&rawQuery=jack%20%26%20Jones">
            <img src={hero6} alt="" />
          </a>
      </div>

      {/* rotating gif */}
      <div className='flex max-w-[83rem] mx-auto items-center'>
        <img src={hero7} alt="" className='w-600'/>
      </div>

      {/* budget friendly items components  */}
      <div className='mt-5 max-w-[83rem] mx-auto items-center'>
      <BudgetItem />
      </div>

      {/* omg deals components  */}
      <div className='mt-5 max-w-[83rem] mx-auto items-center'>
        <OmgDeals />
      </div>

      <div className="mt-5 max-w-[83rem] mx-auto items-center">
        <Category />
      </div>


      {/* <div className="mt-5 max-w-[83rem] mx-auto items-center">
        <Footer />
      </div> */}

    </div>
  )
}
