import React from 'react'
import { Link } from 'react-router-dom'
import AfterLoginPage from './AfterLoginPage' 

const LoginPage = () => {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-[50%] h-full  flex items-center justify-center">
                <img className='' src={`${require('../images/firstLoginPageImage.webp')}`} alt="" />
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[600px] flex flex-col gap-8">
                    <h1 className='text-5xl font-bold leading-normal'>Welcome to <br />Student Management <br />System</h1>
                    <p className=' text-lg'>A robust student management system integrates student enrollment, attendance monitoring, grade management, and administrative tasks. It enhances communication, streamlines operations, and ensures data accuracy. With features tailored to educators, students, and parents, it fosters a collaborative and efficient learning environment while facilitating seamless administrative processes.</p>
                    <div className="flex flex-col items-center gap-8">
                        <Link to="/SigninCreatePage" className='bg-rose-500 cursor-pointer border w-fit hover:bg-rose-700 text-white px-4 py-1 rounded-lg text-xl font-semibold'>Login </Link >
                        <Link to='/AfterLoginPage' className='py-1 px-4 hover:shadow-md cursor-pointer hover:shadow-rose-300 duration-300 border-2 border-rose-500 rounded-md'>Login as Guest</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LoginPage