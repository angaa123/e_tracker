import React from 'react'
function LogInput() {
    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold text-black">Welcome back</h1>
                    <p className="py-3 text-black">
                    Welcome back, Please enter your details
                    </p>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input bg-slate-300 text-slate-600  input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" className="input bg-slate-300 text-slate-600 input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='mt-10 flex'>
                            <p>Don’t have account?</p>
                            <a className='text-orange-500' href = "">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInput