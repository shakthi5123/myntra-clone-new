import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import MenGrid from "../components/MenGrid";

export default function Men() {
  return (
    <>
      <div className="mt-4 max-w-[83rem] mx-auto ">
        <p className="text-sm text-gray-400">
          Home / Clothing /{" "}
          <span className="font-bold text-black">Men T-Shirts</span>{" "}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          <span className="text-black font-bold">Men T-Shirts </span>- 250920
          items
        </p>

        <div className="mt-8 flex justify-between border-b border-[#e9e9eb] pb-2  items-center">
          <p className="font-bold text-sm">FILTERS</p>
          <p className="text-sm text-gray-400 mr-120">
            Bundles v <span className="ml-4">Country of Origin v</span>{" "}
            <span className="ml-4">Size v</span>
          </p>
          <button className="border border-[#e9e9eb] py-2 px-4">
            Sort by : <span className="font-bold text-sm">Recommended</span>
          </button>
        </div>

        <div className="flex mt-6">
          <div className="w-60 pr-6 border-r border-[#e9e9eb] text-[#282c40]">
            {/* LEFT FILTERS */}
            <div className="mt-5 text-[#282c40]">
              <h1 className="font-bold text-sm">CATEGORIES</h1>
              <div className="w-48 flex flex-col border-b border-b-[#e8e8ec] space-y-2 mt-2 text-sm ">
                <div className="flex items-center">
                  <BiSquareRounded /> <p className="ml-2">Tshirts</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Lounge Tshirts</p>
                </div>
              </div>
            </div>

            <div className="mt-5 text-[#282c40]">
              <h1 className="font-bold text-sm">BRAND</h1>
              <div className="w-48 flex flex-col border-b border-b-[#e8e8ec] space-y-2 mt-2 text-sm ">
                <div className="flex items-center">
                  <BiSquareRounded /> <p className="ml-2">WOOSTRO</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Greylongg</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Roadster</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded />{" "}
                  <p className="ml-2">HRX by Hrithik Roshan</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Tommy Hilfiger</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Friskers</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">SZN</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">COLOR CAPITAL</p>
                </div>
              </div>
            </div>
            {/* price slider  */}
            <div className="rounded-md mt-5 text-[#282c40] border-b w-48 border-b-[#e8e8ec]">
              <h3 className="text-sm font-bold mb-4">PRICE</h3>
            </div>

            {/* color choice  */}
            <div className="mt-5 text-[#282c40]">
              <h1 className="font-bold text-sm">COLOR</h1>
              <div className="w-48 flex flex-col border-b border-b-[#e8e8ec] space-y-2 mt-2 text-sm ">
                <div className="flex items-center">
                  <BiSquareRounded /> <p className="ml-2">Black</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">White</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Blue</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Green</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Navy Blue</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Grey</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">Red</p>
                </div>
              </div>
            </div>

            {/* discount filter */}
             <div className="mt-5 text-[#282c40]">
              <h1 className="font-bold text-sm">BRAND</h1>
              <div className="w-48 flex flex-col border-b border-b-[#e8e8ec] space-y-2 mt-2 text-sm ">
                <div className="flex items-center">
                  <BiSquareRounded /> <p className="ml-2">10% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">20% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">30% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded />{" "}
                  <p className="ml-2">40% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">50% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">60% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">70% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">80% and above</p>
                </div>
              </div>
            </div>

            {/* discount repeat  */}
            <div className="mt-5 text-[#282c40]">
              <h1 className="font-bold text-sm">BRAND</h1>
              <div className="w-48 flex flex-col border-b border-b-[#e8e8ec] space-y-2 mt-2 text-sm ">
                <div className="flex items-center">
                  <BiSquareRounded /> <p className="ml-2">10% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">20% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">30% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded />{" "}
                  <p className="ml-2">40% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">50% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">60% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">70% and above</p>
                </div>
                <div className="flex items-center mb-3">
                  <BiSquareRounded /> <p className="ml-2">80% and above</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="flex-1 pl-6">
            <MenGrid />
          </div>


        </div>
      </div>
    </>
  );
}
