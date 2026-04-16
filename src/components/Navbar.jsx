import React from "react"
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="d-flex align-items-center justify-content-between px-4 py-2 ">

      {/* Logo */}
      <div className="mt-2 bg-light p-2 rounded-2 text-danger shadow-sm">
        <MdFastfood size={18} />
      </div>

      {/* Slim Search Bar */}
      <form className="w-50 d-flex align-items-center bg-white px-2 py-1 rounded-1 shadow-sm">
        <IoSearch size={18} className="text-danger me-2" />
        <input
          type="text"
          className="form-control border-0 shadow-none py-0"
          placeholder="Search food..."
        />
      </form>

      {/* Cart */}
      <div className=" mt-2 bg-light p-1 rounded text-danger shadow-sm position-relative">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
        <FaShoppingCart size={22} />
      </div>

    </div>
  )
}

export default Navbar