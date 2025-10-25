import React, { useEffect, useState } from 'react'
// import data from "../siteDate/data.json"
import { Link } from 'react-router-dom'


export default function MenGrid() {
    const [tshirts, setTshirts] = useState([])
    const [loading, setLoading] = useState(true)
    // const tshirts = data.tshirts

    useEffect(() => {
        const fetchTshirts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/products/tshirts");
                const data = await response.json();
                setTshirts(data)
            } catch (error) {
                console.error("Error fetching tshirts:", error)
            }finally{
                setLoading(false)
            }
        };

        fetchTshirts()
    }, []);

    if (loading) {
        return <h2 className='text-center mt-10'>Loading products......</h2>
    }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5'>
        {tshirts.map((item) => (
            <Link to={`/tshirts/${item._id}`} key={item._id}>
                <div key={item.id} className='shadow-md rounded-md overflow-hidden'>
                <img src={item.image} alt={item.title} className='w-full h-72 object-cover' />

                {/* Brand & Title */}
                <div className='mt-2 p-2'>
                    <h1 className='font-bold text-sm'>{item.brand}</h1>
                    <p className="text-xs text-gray-600">{item.title}</p>
                    <span className='font-bold text-sm mt-1'>Rs. {item.price}</span>

                </div>
              

               

            </div>
            </Link>
        ))}
      
    </div>
  )
}
