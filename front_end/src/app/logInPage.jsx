import React from 'react'
import LogInPut from "@/components/logInput";

function LogInPage() {
  return (
    <div className='flex'>
        <div className='w-1/2'><LogInPut/></div>
        <div className='w-1/2 bg-blue-700 min-h-screen'></div>
    </div>
  )
}

export default LogInPage