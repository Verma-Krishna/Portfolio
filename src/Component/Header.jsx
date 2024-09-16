import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  
    const [Toggle,setToggle] = useState(false)
    
    function handleinput(){
        setToggle(!Toggle)
    }

  return (
    <>
      {
  Toggle ? (
    <div id="nav-side" className="fixed inset-0 bg-white shadow-lg z-50">
      <nav
        className="w-full border-2 flex justify-between items-center py-4 px-8 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
        }}
      >
        <div className="logo font-semibold text-white">
          <h1 className="text-3xl">Krishna Verma</h1>
        </div>
        <button
          className="bg-white px-2 py-1 rounded-lg"
          onClick={handleinput}
        >
          <img src="close.png" alt="Close Menu" className="w-5" />
        </button>
      </nav>
      <div className="menu flex flex-col ml-6 mt-6 text-2xl font-medium text-black gap-6 px-4">
        <a href="/" className="bg-slate-100 mb-2 rounded-lg px-4 py-2">
          Home
        </a>
        <a href="/about" className="bg-slate-100 mb-2 rounded-lg px-4 py-2">
          About
        </a>
        <a href="/services" className="bg-slate-100 mb-2 rounded-lg px-4 py-2">
          Services
        </a>
        <a href="/expertise" className="bg-slate-100 mb-2 rounded-lg px-4 py-2">
          Expertise
        </a>
        <div className="flex justify-evenly mt-6 bg-slate-100 p-4 rounded-lg">
          <button className="bg-gray-500 rounded-lg px-4 py-2 text-white text-xl">
            Login
          </button>
          <button className="bg-blue-500 rounded-lg px-4 py-2 text-white text-xl">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ) : (
    <nav
      className="flex justify-between items-center px-8 py-4 shadow-lg"
      style={{
        background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
      }}
    >
      <div className="logo font-semibold text-white">
        <h1 className="text-3xl">Krishna Verma</h1>
      </div>
      <div className="hidden md:flex gap-10 text-2xl text-white font-medium">
        <a href="/" className="hover:text-indigo-600">
          Home
        </a>
        <a href="/about" className="hover:text-indigo-600">
          About
        </a>
        <a href="/services" className="hover:text-indigo-600">
          Services
        </a>
        <a href="/expertise" className="hover:text-indigo-600">
          Expertise
        </a>
      </div>
      <div className="hidden md:block">
        <Link
          to={
            "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=krishnaverma4203@gmail.com"
          }
          className="text-xl font-semibold text-white bg-yellow-500 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:scale-95 hover:text-indigo-500"
        >
          Hire Me!
        </Link>
      </div>
      <button
        className="md:hidden bg-white px-2 py-1 border-2 border-gray-500 rounded-lg"
        onClick={handleinput}
      >
        <img src="menu.png" alt="Open Menu" className="w-6" />
      </button>
    </nav>
  )
}

    
    </>
  );
}
