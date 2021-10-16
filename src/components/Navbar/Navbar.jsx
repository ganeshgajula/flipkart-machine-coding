import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 w-full h-16 py-2 px-16 sticky top-0">
      <p className="text-white text-xl">Flipkart</p>

      <span className="flex items-center justify-between gap-6">
        <button className="text-white">Login</button>

        <ul className="flex items-center justify-between gap-6 text-white">
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
      </span>
    </nav>
  );
};
