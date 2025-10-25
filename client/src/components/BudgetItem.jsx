import React from 'react'
// budget
import b1 from "../assets/budget-items/b1.webp"
import b2 from "../assets/budget-items/b2.webp"
import b3 from "../assets/budget-items/b3.webp"
import b4 from "../assets/budget-items/b4.webp"
import b5 from "../assets/budget-items/b5.webp"
import b6 from "../assets/budget-items/b6.webp"
import b7 from "../assets/budget-items/b7.webp"
import b8 from "../assets/budget-items/b8.webp"
import b9 from "../assets/budget-items/b9.webp"
import b10 from "../assets/budget-items/b10.webp"
import b11 from "../assets/budget-items/b11.webp"
import b12 from "../assets/budget-items/b12.webp"
import b13 from "../assets/budget-items/b13.webp"
import b14 from "../assets/budget-items/b14.webp"
import b15 from "../assets/budget-items/b15.webp"
import b16 from "../assets/budget-items/b16.webp"
import b17 from "../assets/budget-items/b17.webp"
import b18 from "../assets/budget-items/b18.webp"
import b19 from "../assets/budget-items/b19.webp"
import b20 from "../assets/budget-items/b20.webp"
import b21 from "../assets/budget-items/b21.webp"
import b22 from "../assets/budget-items/b22.webp"
import b23 from "../assets/budget-items/b23.webp"
import b24 from "../assets/budget-items/b24.webp"
const images = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24]

import { useState, useEffect } from 'react'
import bTitle from "../assets/budget-items/b-title.webp"

//carousel slider logic 
export default function BudgetItem() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // total sets -> 24 images / 6 per pages = 4 sets
    const totalSets = Math.ceil(images.length / 6)

    // Auto-slide every 1 seconds 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((perv) => (perv + 1) % totalSets)
        }, 3000);

        return () => clearInterval(interval)
    }, [totalSets])

    // Get 6 images per sets 
    const currentImages = images.slice(
        currentIndex * 6,
        currentIndex * 6 + 6
    )

  return (
    <div className='w-full flex flex-col items-center'>
        <img src={bTitle} alt="" />
        {/* images  */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full mt-8">
            {currentImages.map((img, i) => {
                return (
                <img key={i} src={img} alt={`budget-${i}`} className='w-full  object-cover rounded-md shadow' />
                )
            })}
        </div>
        {/* Dots  */}
        <div className="flex mt-4 space-x-2">
            {Array.from({length: totalSets}).map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${ i === currentIndex ? "bg-black" : "bg-gray-400"}`}></button>
            ))}
        </div>
    </div>
  )
}
