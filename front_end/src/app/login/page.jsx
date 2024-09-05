import React from 'react'
import LogIn from "@/components/logIn";

function LogInPage() {
  return (
    <div className='flex'>
        <div className='w-1/2'><LogIn/></div>
        <div className='w-1/2 bg-blue-700 min-h-screen'></div>
    </div>
  )
}

export default LogInPage