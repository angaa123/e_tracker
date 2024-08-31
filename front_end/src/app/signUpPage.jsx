import React from 'react'
import SignUp from "@/components/signUp";

function LogInPage() {
    return (
    <div className='flex'>
        <div className='w-1/2'><SignUp/></div>
        <div className='w-1/2 bg-blue-700 min-h-screen'></div>
    </div>
    )
}

export default LogInPage