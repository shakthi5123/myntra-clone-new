import React from "react";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h1 className="text-2xl  font-bold mb-4 text-center">❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600  text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="shadow-md rounded-md p-3 border">
              <img src={item.image} alt={item.title} className="h-60 w-full object-cover rounded-md" />
              <h2 className="font-semibold mt-2">{item.brand}</h2>
              <p className="text-sm text-gray-600">{item.title}</p>
              <p className="font-bold mt-1">Rs. {item.price}</p>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}