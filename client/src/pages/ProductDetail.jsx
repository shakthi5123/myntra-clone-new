// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import data from "../siteDate/data.json"
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext';

// export default function ProductDetail() {
//     const { category, id } = useParams();
//     const { addToCart } = useCart();
//     const { addToWishlist } = useWishlist();

    
    
//     const categoryData = data[category] || [];
//     const product = categoryData.find((item) => item.id === parseInt(id));
//     // const product = data.tshirts.find((item) => item.id === parseInt(id));

//     if(!product) {
//         return <h1 className='text-center mt-20 text-xl'>Product not found</h1>
//     }

//   return (
//     <div className='max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
//         {/* left image  */}
//         <div>
//             <img src={product.image} alt={product.title} className='w-full h-[750px] object-cover rounded-lg shadow-md' />
//         </div>

//         {/* right details  */}
//         <div className='flex flex-col justify-center sapace-y-4'>
//             <h1 className='text-2xl font-bold'>{product.brand}</h1>
//             <p>{product.title}</p>

//             <div>
//                 Rs. {product.price}{ " " }
//                 <span className='text-gray-500 line-through ml-2'>Rs. 999</span>{" "}
//                 <span className='text-orange-500 font-semibold ml-1'>(70% off)</span>
//             </div>

//             {/* Size options */}
//             <div className='mt-4'>
//                 <h3 className='font-semibold mb-2'>Select Size</h3>
//                 <div className='flex gap-2'>
//                     {["S", "M", "L", "XL", "XXL"].map((size) => (
//                         <button key={size} className='border px-4 py-2 rounded-md hover:border-black'>{size}</button>
//                     ))}

//                 </div>
//             </div>

//             {/* Buttons */}
//             <div className='mt-6 flex gap-4'>
//                 <button onClick={() => addToCart(product)} className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold'>Add to Cart </button>
//                 <button onClick={() => addToWishlist(product)} className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-black">
//                 WISHLIST ❤️
//                 </button>
//             </div>

//         </div>
//     </div>
//   )
// }



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext';

// export default function ProductDetail() {
//   const { category, id } = useParams();
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/products/${category}/${id}`);
//         if (!response.ok) throw new Error('Product not found');
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [category, id]);

//   if (loading) {
//     return <h2 className="text-center mt-20 text-xl">Loading product details...</h2>;
//   }

//   if (!product) {
//     return <h1 className="text-center mt-20 text-xl">Product not found</h1>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
//       {/* left image */}
//       <div>
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-[750px] object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* right details */}
//       <div className="flex flex-col justify-center space-y-4">
//         <h1 className="text-2xl font-bold">{product.brand}</h1>
//         <p>{product.title}</p>

//         <div>
//           Rs. {product.price}{" "}
//           <span className="text-gray-500 line-through ml-2">Rs. 999</span>{" "}
//           <span className="text-orange-500 font-semibold ml-1">(70% off)</span>
//         </div>

//         {/* Size options */}
//         <div className="mt-4">
//           <h3 className="font-semibold mb-2">Select Size</h3>
//           <div className="flex gap-2">
//             {["S", "M", "L", "XL", "XXL"].map((size) => (
//               <button
//                 key={size}
//                 className="border px-4 py-2 rounded-md hover:border-black"
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button
//             onClick={() => addToCart(product)}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold"
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={() => addToWishlist(product)}
//             className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-black"
//           >
//             WISHLIST ❤️
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function ProductDetail() {
  const { category, id } = useParams()
  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${category}/${id}`)
        const data = await response.json()
        if (response.ok) {
          setProduct(data)
        } else {
          setProduct(null)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [category, id])

  if (loading) return <h2 className='text-center mt-10'>Loading product...</h2>
  if (!product) return <h2 className='text-center mt-10'>Product not found</h2>

  return (
    <div className='max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
      <div>
        <img src={product.image} alt={product.title} className='w-full h-[750px] object-cover rounded-lg shadow-md' />
      </div>
      <div className='flex flex-col justify-center space-y-4'>
        <h1 className='text-2xl font-bold'>{product.brand}</h1>
        <p>{product.title}</p>
        <div>
          Rs. {product.price}{' '}
          <span className='text-gray-500 line-through ml-2'>Rs. 999</span>{' '}
          <span className='text-orange-500 font-semibold ml-1'>(70% off)</span>
        </div>

        <div className='mt-4'>
          <h3 className='font-semibold mb-2'>Select Size</h3>
          <div className='flex gap-2'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size} className='border px-4 py-2 rounded-md hover:border-black'>
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className='mt-6 flex gap-4'>
          <button onClick={() => addToCart(product)} className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold'>
            Add to Cart
          </button>
          <button onClick={() => addToWishlist(product)} className='border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-black'>
            WISHLIST ❤️
          </button>
        </div>
      </div>
    </div>
  )
}