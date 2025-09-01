import React from 'react'
import { IoHomeOutline,IoSettingsOutline,IoLogOutOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className='w-full h-full bg-slate-900 flex flex-col py-8 text-red-500'>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer'>
            <span><IoHomeOutline /></span>
            <h3>Home</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer'>
            <span><SlCalender /></span>
            <h3>Calender</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer'>
            <span><VscGraph /></span>
            <h3>Statistics</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer'>
            <span><IoSettingsOutline /></span>
            <h3>Setting</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer'>
            <span><IoLogOutOutline /></span>
            <h3>Log Out</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer opacity-0'>
            <span><IoLogOutOutline /></span>
            <h3>Log Out</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer opacity-0'>
            <span><IoLogOutOutline /></span>
            <h3>Log Out</h3>
        </div>
        <div className='flex items-center gap-2 mx-2 my-1 p-4 bg-slate-800 rounded-lg cursor-pointer opacity-0'>
            <span><IoLogOutOutline /></span>
            <h3>Log Out</h3>
        </div>
    </div>
  )
}

export default Sidebar
