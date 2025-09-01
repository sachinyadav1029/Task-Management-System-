import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
      <div className='w-full h-full bg-slate-900 flex'>
        <div className='w-1/6 h-full flex items-center bg-slate-900 justify-center border-1 border-r-slate-800 border-b-slate-800'>
            <img  className='h-30 w-36' src='/images/7Down_Logo.png'></img>
        </div>
        <div className="w-4/6 flex flex-col justify-center">
            <div className="flex m-8 w-8/10 px-2 py-2 items-center gap-1 bg-slate-800 rounded-md">
                <IoSearchSharp className='text-red-500 h-lg'/>
                <input className='text-white outline-0 w-full' placeholder='Search'></input>
            </div>
        </div>
        <div className="w-1/6 flex items-center gap-2">
            <button className="text-red-500 my-2 px-6 py-2 rounded-md border-1 border-red-500 cursor-pointer">Login</button>
            <button className="text-red-500 my-2 px-6 py-2 rounded-md border-1 border-red-500 cursor-pointer">Signup</button>
        </div>
      </div>
  )
}

export default Navbar
