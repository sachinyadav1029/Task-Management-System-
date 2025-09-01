import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import DashBody from '../Components/DashBody'

const Dashboard = () => {
  return (
    <div className='h-screen w-full'>
        <div className='w-full h-1/6'>
            <Navbar />
        </div>
        <div className='w-full h-5/6 flex'>
          <div className="w-1/6">
              <Sidebar />
          </div>
          <div className='w-5/6'>
              <DashBody />
          </div>
        </div>
    </div>
  )
}

export default Dashboard
