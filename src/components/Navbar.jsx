import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex w-full items-center justify-between p-4 z-[100] absolute">
      <Link to={`/`}>
        <h1 className=" text-red-600 text-4xl font-semibold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={`/account`}>
            <button className=" text-white font-medium pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className=" bg-red-600 px-6 py-2 font-medium rounded cursor-pointer"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <Link to={`/signin`}>
            <button className=" text-white font-medium pr-4">Sign In</button>
          </Link>
          <Link to={`/signup`}>
            <button className=" bg-red-600 px-6 py-2 font-medium rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;