import React, { useEffect, useState } from "react";
// import data from "../siteDate/data.json";
import { Link } from "react-router-dom";

export default function WomenGrid() {
  // const kurtis = data.kurtis;
  const [kurtis, setKurtis] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchKurtis = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products/kurtis")
        const data = await response.json()
        setKurtis(data)
      } catch (error) {
        console.error("Error fetching kurtis:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchKurtis();
  }, [])

if (loading) {
  return <h2 className="text-center mt-10">Loading products....</h2>
}

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {kurtis.map((kurti) => (
        <Link to={`/kurtis/${kurti._id}`} key={kurti._id}>
            <div key={kurti.id} className="shadow-md rounded-md overflow-hidden">
                <img src={kurti.image} alt={kurti.title} className='w-full h-72 object-cover' />

                 {/* Brand & Title */}
                <div className='mt-2 p-2'>
                    <h1 className='font-bold text-sm'>{kurti.brand}</h1>
                    <p className="text-xs text-gray-600">{kurti.title}</p>
                    <span className='font-bold text-sm mt-1'>Rs. {kurti.price}</span>

                </div>

            </div>
        </Link>
      ))}
    </div>
  );
}
