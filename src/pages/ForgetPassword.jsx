import React, { useState } from "react";
import Key from "../assets/images/key.jpg";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const onchange = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <section>
      <div className="text-3xl text-center mt-6 font-bold">
        <h1>Forget Password</h1>
        <div
          className="flex justify-center 
        flex-wrap items-center px-6 py-12 
        max-w-3xl mx-auto "
        >
          <div className="md:w-[67%] lg:w-[50%] mb-12 mb:mb-6">
            <img src={Key} alt="key" className="rounded-3xl w-full" />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-12">
            <form>
              <input
                className="w-full px-4 py-2 text-xl
                 text-gray-700 border-gray-300 rounded transition ease-in-out mb-6"
                type="email"
                id="email"
                value={email}
                onChange={onchange}
                placeholder="Email Address"
              />
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">
                  Don't have A account?
                  <Link
                    to="/sign-up"
                    className="text-red-600
                  hover:text-red-700 transition duration-200
                  ease-in-out ml-1"
                  >
                    Register
                  </Link>
                </p>
                <p>
                  <Link
                    to="/sign-in"
                    className="text-blue-600
                  hover:text-blue-800 transition duration-200
                  ease-in-out ml-1"
                  >
                    Sign in instead
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600
            text-white px-7 py-3
            text-sm uppercase font-medium rounded shadow-md
            hover:bg-blue-700 transition duration-100
            ease-in-out active:bg-blue-800"
              >
                Send reset password
              </button>
              <div
                className="my-4 flex items-center
            before:border-t 
            before:flex-1 
            before:border-gray-300
            after:border-t 
            after:flex-1 
            after:border-gray-300"
              >
                <p className="text-center">Or</p>
              </div>
              <OAuth/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ForgetPassword