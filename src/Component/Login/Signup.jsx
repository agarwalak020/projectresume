import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

function Signup() {
  

  return (
    <>
      <div className=" " >
        <div className=" flex justify-center px-2 md:px-16 py-12 " id='bglogin'>
          <div
            className=" p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg" id='bg'
          >
            <h2 className="text-2xl text-black font-bold mb-6 text-center">
              Create Your Account
            </h2>
            
              <form >
                <div className="mb-4">
                  <label className="block text-black"> Name </label>
                  <input type='text'
                  name='name'
                  className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
                

                <div className=" text-center py-2">
                  <label className=" text-black ">
                    {" "}
                    I agree to Terms and condition{" "}
                  </label>
                  <input type="checkbox" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md"
                >
                  Signup
                </button>
              </form>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
