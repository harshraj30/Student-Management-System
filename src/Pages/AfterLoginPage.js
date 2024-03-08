import React from 'react'
import { Link } from 'react-router-dom'

const AfterLoginPage = () => {
    return (
        <div className="w-screen flex justify-center items-center h-screen bg-rose-400">
            <div className="w-[1300px] grid grid-cols-3 gap-5">

                <Link to="/AdminLogin">
                    <div className="bg-rose-500 shadow-black hover:bg-rose-700 cursor-pointer shadow-2xl p-5 rounded-lg flex flex-col gap-4">
                        <div className="flex justify-center pb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  bg-white p-0.5 text-rose-500 rounded-full">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <h1 className='text-center text-3xl text-white font-bold'>Admin</h1>
                        <p className='text-center text-lg text-white'>Login as an adminstator to access the dashboard to mannage app data..</p>
                    </div>
                </Link>

               <Link to="/StudentLogin">
                    <div className="bg-rose-500 shadow-black hover:bg-rose-700 cursor-pointer shadow-2xl p-5 rounded-lg flex flex-col gap-4">
                        <div className="flex justify-center pb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  bg-white p-0.5 text-rose-500 rounded-full">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>

                        </div>

                        <h1 className='text-center text-3xl text-white font-bold'>Student</h1>
                        <p className='text-center text-lg text-white'>Login as a student to explore course material and assignment..</p>
                    </div>
               </Link>
                

                <Link to="/TeacherLogin">
                <div className="bg-rose-500 shadow-black hover:bg-rose-700 cursor-pointer shadow-2xl p-5 rounded-lg flex flex-col gap-4">
                    <div className="flex justify-center pb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  bg-white p-0.5 text-rose-500 rounded-full">
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>

                    </div>

                    <h1 className='text-center text-3xl text-white font-bold'>Teacher</h1>
                    <p className='text-center text-lg text-white'>Login as a teacher to create courses, assignment and tracks student progress..</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default AfterLoginPage