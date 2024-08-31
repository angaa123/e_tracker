import React from 'react'
function SignUp() {
    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold text-black">Create Geld account</h1>
                    <p className="py-3 text-black">
                    Sign up below to create your Wallet account
                    </p>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="Name" placeholder="name" className="input bg-slate-300 text-slate-600  input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input bg-slate-300 text-slate-600  input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" className="input bg-slate-300 text-slate-600 input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <input type="re-password" placeholder="re-password" className="input bg-slate-300 text-slate-600 input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <div className='mt-10 flex'>
                            <p className='text-black'>Already have account?</p>
                            <a className='text-blue-500' href = "">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp