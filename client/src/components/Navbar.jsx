import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from "../assets/myntra-logo.jpg";
import { FiSearch } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* whole nav-bar  */}
      <div className=" shadow-md">
        {/* nav-left-logo  */}
        <div className="flex items-center ">
          <NavLink to="/">
            <img src={logo} alt="myntra-logo" className="h-20 w-20 ml-10" />
          </NavLink>

          {/* navbar-link  */}
          <nav className="ml-12 text-[12px]  ">
            <ul className="flex gap-10 relative bg-white px-6 py-4">
              <li className="group relative ">
                <NavLink
                  to="/men"
                  className="pb-2 border-b-2 border-transparent font-bold group-hover:border-pink-500"
                >
                  MEN
                </NavLink>

                {/* Dropdown */}
                <div className=" absolute left-0 top-full mt-2 hidden  group-hover:flex bg-white shadow-lg w-[900px] p-6 gap-10 z-50 ">
                  {/* Column 1 */}
                  <div className="flex flex-col space-y-2 text-sm">
                    <ul>
                      <h1 className="text-pink-500 mb-2">Topwear</h1>
                      <li>T-Shirts</li>
                      <li>Casual Shirts</li>
                      <li>Formal Shirts</li>
                      <li>SweatShirts</li>
                      <li>Sweaters</li>
                      <li>Jacket</li>
                      <li>Blazers & Coats</li>
                      <li>Suits</li>
                      <li>Rain Jackets</li>

                      <h1 className="mt-5 text-pink-500">
                        Indian & Festive Wear
                      </h1>
                      <li>Kurtas & Kurtas Sets </li>
                      <li>Sherwanis</li>
                      <li>Nehru Jackets</li>
                      <li>Dhotis</li>
                    </ul>
                  </div>

                  {/* column 2 */}
                  <div className="flex flex-col space-y-2 text-sm bg-[#FBFBFB] px-4 py-1">
                    <ul>
                      <h1 className="text-pink-500 mb-2">Bottomwear</h1>
                      <li>Jeans</li>
                      <li>Casual Trousers</li>
                      <li>Formal Trousers</li>
                      <li>Shorts</li>
                      <li>Track Pants & Joggers</li>

                      <h1 className="mt-5 text-pink-500">
                        Innerwear & Sleepwear
                      </h1>
                      <li>Briefs & Trunks</li>
                      <li>Boxers</li>
                      <li>Vests</li>
                      <li>Sleepwear & Loungewear</li>
                      <li>Thermals</li>

                      <h1 className="mt-5 text-pink-500">Plus Size</h1>
                    </ul>
                  </div>

                  {/* column 3 */}
                  <div className="flex flex-col space-y-2 text-sm">
                    <ul>
                      <h1 className="text-pink-500 mb-2 space-y-2">Footwear</h1>
                      <li>Casual Shoes</li>
                      <li>Sports Shoes</li>
                      <li>Formal Shoes</li>
                      <li>Sneakers</li>
                      <li>Sandals & Floaters</li>
                      <li>Flip Flops</li>
                      <li>Socks</li>

                      <h1 className="text-pink-500 mt-3 mb-2">
                        Personal Care & Grooming
                      </h1>
                      <h1 className="text-pink-500 mb-2">
                        Sunglasses & Frames
                      </h1>
                      <h1 className="text-pink-500 mb-2">Watches</h1>
                    </ul>
                  </div>

                  {/* column 4 */}
                  <div className="flex flex-col space-y-2 text-sm bg-[#FBFBFB] px-4 py-1">
                    <ul>
                      <h1 className="text-pink-500 mb-2 space-y-2">
                        Sports & Active Wear
                      </h1>
                      <li>Sports Shoes</li>
                      <li>Sports Sandals</li>
                      <li>Actice T-shirts</li>
                      <li>Track Pants & Shorts</li>
                      <li>Tracksuits</li>
                      <li>Jackets & Sweatshirts</li>
                      <li>Sports Accessories</li>
                      <li>Swimwear</li>

                      <h1 className="text-pink-500 mb-2">Gadgets</h1>
                      <li>Smart Wearable</li>
                      <li>Fitness Gadgerts</li>
                      <li>Headphones</li>
                      <li>Speakers</li>
                    </ul>
                  </div>
                </div>
              </li>

              <NavLink to="/women">
                <li className="font-bold">WOMEN</li>
              </NavLink>
              <NavLink to="/kids">
                <li className="font-bold">KIDS</li>
              </NavLink>
              <NavLink to="/home">
                <li className="font-bold">HOME</li>
              </NavLink>
              <NavLink to="/beauty">
                <li className="font-bold">BEAUTY</li>
              </NavLink>
              <NavLink to="/genz">
                <li className="font-bold">GENZ</li>
              </NavLink>
              <NavLink to="/studio">
                <li className="font-bold">
                  STUDIO <sup className="text-[10px] text-[#ff406d]">NEW</sup>
                </li>
              </NavLink>
            </ul>
          </nav>

          {/* nav-mid-search-bar  */}
          <div className="flex items-center ml-10  gap-5 w-full max-w-sm px-2 py-2 bg-[#f5f5f6] rounded-md focus-within:bg-white focus-within:border focus-within:border-gray-300">
            {/* search-icons  */}
            <FiSearch className=" ml-1" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full text-sm outline-none"
            />
          </div>

          {/* profile */}
          <div className="flex items-center gap-5 ml-10 relative">
            {/* <span className="flex flex-col items-center text-xs font-bold">
              <IoMdContact className="text-lg"/>
              Profile
            </span> */}

            {/* Profile with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.dropdownTimer) clearTimeout(window.dropdownTimer); // prevent quick hide
                setShowDropdown(true);
              }}
              onMouseLeave={() => {
                // Set a delay before hiding
                window.dropdownTimer = setTimeout(
                  () => setShowDropdown(false),
                  400
                );
              }}
            >
              {/* Profile Icon */}
              <span className="flex flex-col items-center text-xs font-bold cursor-pointer">
                <IoMdContact className="text-lg" />
                {user ? "Profile" : "Login"}
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 top-full mt-3 bg-white border rounded-lg shadow-xl w-64 p-4 text-sm z-50 transform transition-all duration-300 ease-in-out ${
                  showDropdown
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => {
                  if (window.dropdownTimer) clearTimeout(window.dropdownTimer); // Keep open when inside dropdown
                  setShowDropdown(true);
                }}
                onMouseLeave={() => {
                  // Add a delay before closing
                  window.dropdownTimer = setTimeout(
                    () => setShowDropdown(false),
                    400
                  );
                }}
              >
                {/* For Non-Logged-In Users */}
                {!user ? (
                  <>
                    <h3 className="font-semibold text-gray-700 mb-1">
                      Welcome
                    </h3>
                    <p className="text-gray-500 text-xs mb-3">
                      To access account and manage orders
                    </p>

                    <button
                      onClick={() => navigate("/auth")}
                      className="w-full py-1.5 mb-3 border border-pink-500 text-pink-500 font-semibold rounded hover:bg-pink-500 hover:text-white transition"
                    >
                      LOGIN / SIGNUP
                    </button>
                    <hr className="my-2" />
                    <ul className="space-y-2 text-gray-700">
                      <li className="hover:text-pink-600 cursor-pointer">
                        Orders
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Wishlist
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Gift Cards
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Contact Us
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Myntra Insider{" "}
                        <span className="bg-pink-100 text-pink-600 text-[10px] px-1 rounded ml-1">
                          New
                        </span>
                      </li>
                      <hr className="my-2" />
                      <li className="hover:text-pink-600 cursor-pointer">
                        Myntra Credit
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Coupons
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Saved Cards
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Saved VPA
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Saved Addresses
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-gray-700 mb-1">
                      Hi, <span className="text-pink-600">{user?.name || user?.email}</span> 👋
                    </h3>
                    <p className="text-gray-500 text-xs mb-3">
                      Manage your account and orders
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full py-1.5 mb-3 border border-red-400 text-red-500 font-semibold rounded hover:bg-red-500 hover:text-white transition"
                    >
                      Logout
                    </button>
                    <hr className="my-2" />
                    <ul className="space-y-2 text-gray-700">
                      <li className="hover:text-pink-600 cursor-pointer">
                        Orders
                      </li>
                      <li
                        onClick={() => navigate("/wishlist")}
                        className="hover:text-pink-600 cursor-pointer"
                      >
                        Wishlist
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Coupons
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Saved Addresses
                      </li>
                      <li className="hover:text-pink-600 cursor-pointer">
                        Contact Us
                      </li>
                    </ul>
                  </>
                )}
              </div>


              
            </div>

            <Link
              to="/wishlist"
              className="flex flex-col items-center text-xs font-bold relative"
            >
              <CiHeart className="text-lg " />
              Wishlist
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="flex flex-col items-center text-xs font-bold relative"
            >
              <MdOutlineShoppingBag className="text-lg" />
              Bag
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </Link>

            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}
