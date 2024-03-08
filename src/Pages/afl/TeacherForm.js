import React from 'react'
import AdminLogin from '../AdminLogin'

const TeacherForm = () => {
    return (
        <AdminLogin>
            <h1 className='text-center text-3xl text-gray-600'>Teacher Login</h1>
            <p className='text-center text-lg text-gray-500'>Welcome back! Please enter your details</p>
            <div className="">
                <p>Enter Your Email:</p>
                <input className='w-full px-2 py-1 focus:border-rose-500 focus:bg-gray-100 bg-gray-50 outline-none border rounded-lg border-gray-300 text-lg' type="email" placeholder='harsh30032003@gmail.com' />
            </div>
        </AdminLogin>
    )
}

export default TeacherForm