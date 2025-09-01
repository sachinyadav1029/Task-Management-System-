import React from 'react'
import Calendar from 'react-calendar'

const DashBody = () => {
  const m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = m[currentDate.getMonth()]; // getMonth() is 0-indexed
  const year = currentDate.getFullYear();
  const formattedDateManual = `${day}st ${month} ${year}`;

  return (
    <div className='flex flex-col h-full bg-slate-800 border-box'>
      <div className='h-2/4 flex gap-6 py-4 px-12 w-full'>
        <div className='p-2 w-2/4 h-full flex flex-col gap-2 rounded-lg'>
          <div className="flex gap-2 h-2/4 w-full">
                  <div className='flex flex-col justify-center items-center h-full w-full bg-slate-900 rounded-lg text-red-500'>
                      <h1 className='text-xl font-semibold font-serif'>Priority Tasks</h1>
                      <span className='text-xl font-bold'>20</span>
                  </div>
                  <div className='flex flex-col justify-center items-center h-full w-full bg-slate-900 rounded-lg text-red-500'>
                      <h1 className='text-xl font-semibold font-serif'>Upcoming Tasks</h1>
                      <span className='text-xl font-bold'>20</span>
                  </div>
          </div>
          <div className="flex gap-2 h-2/4 w-full">
                  <div className='flex flex-col justify-center items-center h-full w-full bg-slate-900 rounded-lg text-red-500'>
                      <h1 className='text-xl font-semibold font-serif'>Overdue Tasks</h1>
                      <span className='text-xl font-bold'>20</span>
                  </div>
                  <div className='flex flex-col justify-center items-center h-full w-full bg-slate-900 rounded-lg text-red-500'>
                      <h1 className='text-xl font-semibold font-serif'>Pending Tasks</h1>
                      <span className='text-xl font-bold'>20</span>
                  </div>
          </div> 
        </div>
        <div className='p-2 w-2/4 h-full flex flex-col justify-center items-center gap-1 rounded-lg text-red-500'>
          <div className='bg-slate-900 p-8 rounded-lg'>
            <Calendar />
          </div>
        </div>
      </div>

      <div className='h-2/4 flex gap-6 py-4 px-12 w-full'>
        <div className='p-2 w-2/4 h-full flex flex-col gap-2 rounded-lg'>
          <div className="flex gap-2 h-full w-full">
                  <div className='flex flex-col gap-2 justify-center items-center h-full w-full bg-slate-900 rounded-lg text-red-500'>
                      <h1 className='text-xl font-semibold font-serif'>Web Development</h1>
                      <p><span className='text-blue-400'>Deadline :</span>{formattedDateManual}</p>
                      <progress className="progress text-red-500 w-56" value="80" max="100"></progress>
                      <button className="px-6 py-2 bg-blue-400 rounded-lg text-white font-bold text-md">watch</button>
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center h-full w-full bg-slate-900 rounded-lg text-red-500'>
                      <h1 className='text-xl font-semibold font-serif'>Mobile Development</h1>
                      <p><span className='text-blue-400'>Deadline :</span>{formattedDateManual}</p>
                      <progress className="progress text-red-500 w-56" value="70" max="100"></progress>
                      <button className="px-6 py-2 bg-blue-400 rounded-lg text-white font-bold text-md">watch</button>
                  </div>
          </div>
        </div>
        <div className='p-2 w-2/4 h-full flex flex-col gap-2 text-red-500'>
          <div className="p-4 h-2/4 w-full bg-slate-900 rounded-lg">
                <div className='text-xl font-semibold text-blue-400'>Database</div> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus est labore quos itaque? Sunt qui natus totam aut ad vel!</p> 
          </div>
          <div className="p-4 h-2/4 w-full bg-slate-900 rounded-lg">
                <div className='text-xl font-semibold text-blue-400'>New Drive</div> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus est labore quos itaque? Sunt qui natus totam aut ad vel!</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBody
