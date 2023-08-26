import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState('')
    const { user, logIn } = UserAuth();
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await logIn(email, password);
        navigate('/')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    }

  return (
    <>
      <div className=" w-full h-screen">
        <img
          className=" hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/648a5710-88d5-403d-8dbf-bbe80a72bb90/NP-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/netflix"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className=" max-w-[320px] mx-auto py-16">
                {error ? <p className=" p-3 bg-red-400 my-2">{error}</p> : null}
              <h1 className=" text-2xl font-semibold">Sign In</h1>
              <form onSubmit={handleSubmit} className=" w-full flex flex-col py-4">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                  className=" p-3 my-2 bg-gray-800 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                  className=" p-3 my-2 bg-gray-800 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className=" bg-red-600 py-3 my-6 rounded font-medium">
                  Sign In
                </button>
                <div className=" flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className=" mr-2" type="checkbox" name="" id="" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className=" py-8">
                  <span className=" text-gray-600">
                    New to Netflix?
                  </span>{" "}
                  <Link to='/signup'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
