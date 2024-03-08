import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="">
                <div className="bg-rose-500 py-3 flex justify-center w-full">
                    <div className="w-[80%] flex justify-between ">
                        <div className="flex gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                                <h1>+91 9060532886</h1>
                            </div>
                            |
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <h1>harsh30032003@gmail.com</h1>
                            </div>
                        </div>
                        <div className="">
                            <a className='text-white' href="">Contact Us</a>
                        </div>
                    </div>
                </div>


                <div className="w-full flex justify-center shadow-xl shadow-rose-100">
                    <div className="w-[80%] py-4 flex justify-between ">
                        <div className="flex items-center gap-5">
                            <img className='h-16 w-48 cursor-pointer ' src={`${require('../../images/MasterStudentPage.png')}`} alt="" />
                        </div>
                        <div className="flex gap-10 items-center">
                            <Link to="/"><h1 className='text-lg font-semibold hover:text-rose-500 cursor-pointer hover:underline underline-offset-4'>Home</h1></Link>
                            <Link to="/IdentityCard"><h1 className='text-lg font-semibold hover:text-rose-500 cursor-pointer hover:underline underline-offset-4'>ID Card</h1></Link>
                            <Link to="/MasterStudentPage"><h1 className='text-lg font-semibold hover:text-rose-500 cursor-pointer hover:underline underline-offset-4'>Notification</h1></Link>
                            <Link to="/MasterStudentPage"><h1 className='text-lg font-semibold hover:text-rose-500 cursor-pointer hover:underline underline-offset-4'>Student LMS</h1></Link>
                        </div>
                    </div>
                </div>
            </div>

            {children}

            <div className="bg-rose-500 flex justify-center items-center ">
                <h1 className='text-white text-lg font-semibold py-2'>All Rights Reserved By <span><a className=' ' href="https://github.com/harshraj30">@Mai_Hu_Harsh</a></span></h1>
            </div>
        </div>
    )
}

export default Nav