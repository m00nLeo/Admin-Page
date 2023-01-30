import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NavMenu = () => {
  let location = useLocation();
  if (location.pathname === "/") {
    return <></>;
  } else {
    return (
      <div className="">
        <div className="bg-teal-800 h-screen p-4">
          <img
            className="w-full h-24 mb-8"
            src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
            alt=""
          />
          <div className="flex flex-col items-center gap-12 text-white">
            <Link to="/overview" className=" hover:text-teal-200 mt-6">
              Overview
            </Link>
            <Link to="/roomslist" className="hover:text-teal-200">
              Room
            </Link>
            <Link to="/orders" className="hover:text-teal-200">
              Order
            </Link>
            <Link to="/" className="hover:text-teal-200">
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default NavMenu;
