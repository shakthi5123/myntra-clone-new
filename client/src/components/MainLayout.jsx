import React from 'react'
import Navbar from './Navbar'
import { Outlet} from "react-router-dom"
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className=''>
        <Outlet /> {/* This is where Home, About, etc. will appear */}
      </main>
     {/* footer here if you want  */}
     <div className='mt-5 max-w-[83rem] mx-auto items-center'>
        <Footer />
     </div>
     
    </div>
  )
}
