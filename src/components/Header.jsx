import React from "react";
import logo from "../assets/images/rdc-logo-default.svg";
import { useLocation,useNavigate } from "react-router";

const Header = () => {
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location.pathname)
  function pathMathRoute(route){
    if(route===location.pathname){
      return true
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src={logo} alt="logo" className="h-5 cursor-pointer" onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className="flex space-x-10">
            <li className={`py-3 text-sm font-semibold
             text-gray-500 border-b-[3px] 
             border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-600"}`}
             onClick={()=>navigate("/")}>Home</li>
            <li className={`py-3 text-sm font-semibold
            text-gray-500 border-b-[3px] 
            border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-600"}`}
            onClick={()=>navigate("/offers")}>Offer</li>
            <li className={`py-3 text-sm font-semibold
            text-gray-500 border-b-[3px] 
            border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-600"}`}
            onClick={()=>navigate("/sign-in")}>Sign in</li>
            </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
