import React from 'react'

const TeacherLogin = () => {
  return (
    <div className="w-screen h-screen flex">
            <div className="w-[40%] flex py-12 items-center justify-center">
                <div className="w-[500px] flex flex-col gap-5">
                    <h1 className='text-center text-3xl text-gray-600'>Teacher Login</h1>
                    <p className='text-center text-lg text-gray-500'>Welcome back! Please enter your details</p>
                    <div className="">
                        <p>Enter Your Email:</p>
                        <input className='w-full px-2 py-1 focus:border-rose-500 focus:bg-gray-100 bg-gray-50 outline-none border rounded-lg border-gray-300 text-lg' type="email" placeholder='harsh30032003@gmail.com' />
                    </div>
                    <div className="">
                        <p>Enter Your Password:</p>
                        <input className='w-full px-2 py-1 focus:border-rose-500 focus:bg-gray-100 bg-gray-50 outline-none border rounded-lg border-gray-300 text-lg' type="password" placeholder='123456789@' />
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-3">
                            <input className='w-5' type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <a className='text-rose-500 hover:text-rose-700' href="">Forgot Password?</a>
                    </div>
                    <button className='bg-rose-500 border hover:bg-rose-700 text-white px-4 py-1 rounded-lg text-xl font-semibold'>Login</button>
                    <button className='py-1 px-4 hover:shadow-md hover:shadow-rose-400 duration-300 border-2 border-rose-500 rounded-md'>Login as Guest</button>
                    <div className="flex gap-4 justify-end">
                        <p>Don't have an account?</p>
                        <a className='text-rose-500 hover:text-rose-700' href="">Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="w-[60%] flex items-center">
                <img src={`${require('../images/teacher.jpeg')}`} alt="" />
            </div>
        </div>
  )
}

export default TeacherLogin