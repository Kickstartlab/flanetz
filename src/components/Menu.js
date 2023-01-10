import React, { useState } from 'react'



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="md:flex hidden items-center justify-between font-kanit py-3 h-28">
        <a href="/" className="logo">
          <h2 className="text-4xl font-bold text-white-100">Flanetz</h2>
        </a>

        <div className="nav font-minecraft">
          <ul className="text-lg flex justify-center gap-8 items-center">
            <li><a href="/" className="text-white-100 hover:border-b-2 uppercase">buy</a></li>
            <li><a href="/" className="text-white-100  hover:border-b-2 uppercase">about</a></li>
            <li><a href="/" className="text-white-100  hover:border-b-2 uppercase">community</a></li>
          </ul>
        </div>

        <div className="">

        </div>
      </div>

      <div className="md:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo">
          <h2 className="text-4xl font-bold text-white-100 font-kanit">Flanetz</h2>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 p-3 lg:left-0 w-3/4 overflow-y-auto text-center font-kanit font-semibold bg-blue-300 z-20" style={{ left: "0" }}>
        <div className="p-2.5 mt-1 mb-8 flex items-center">
          <a href="/" className="logo">
            <h2 className="text-4xl font-bold text-white-100">Flanetz</h2>
          </a>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer bg-blue-100">
          <a href="/" className="text-white-100 uppercase ">buy</a>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-blue-100">
          <a href="/" className="text-white-100 uppercase">about</a>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-blue-100 text-white-100">
          <a href="/" className="text-white-100 uppercase">community</a>
        </div>
      </div> : null
      }


    </header >
  )
}
