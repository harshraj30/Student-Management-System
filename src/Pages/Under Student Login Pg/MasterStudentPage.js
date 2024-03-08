import React, { useEffect, useState } from 'react'
import studentcardData from '../../Data/StudentCourseData'
import Notice from '../../Data/Notice'
import { Link } from 'react-router-dom'
import axios from 'axios'

// console.log(Notice[0].heading);
let a = "Master of Computer Applications"



const MasterStudentPage = ({url}) => {

    // useEffect(() => {
    //   axios.get(url+'/users').then((res)=>{
    //     console.log(res.data);
    //   })
    // }, [])
    const [sessionUser , setSessionUser ] = useState()

  useEffect(() => {
    axios.get(url+'/users/'+localStorage.getItem('user')).then((res)=>{
      setSessionUser(res.data);
    })
  }, [])
    return (
        <div className="">
            <div className="w-screen">
                <div className="bg-sky-500 h-2"></div>
                <div className="w-full flex justify-center">
                    <div className="w-[80%] py-4 flex justify-between ">
                        <div className="flex items-center gap-5">
                            <img className='h-14 cursor-pointer ' src={`${require('../../images/MasterStudentPage.png')}`} alt="" />
                            <h2 className='rotate-90 cursor-default text-3xl text-gray-500'>.....</h2>
                            <h1 className='text-3xl underline-offset-4 hover:text-rose-500 cursor-pointer hover:underline '>{a}</h1>
                        </div>
                        <div className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 hover:text-rose-500 cursor-pointer h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>
                            <h2 className='rotate-90 text-3xl cursor-default text-gray-500'>.....</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 hover:text-rose-500 cursor-pointer h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 hover:text-rose-500 cursor-pointer h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 hover:text-rose-500 cursor-pointer h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <h2 className='rotate-90 text-3xl cursor-default text-gray-500'>.....</h2>
                            <Link to="/StudentZone">
                                <div className="flex cursor-pointer items-center gap-3 hover:text-rose-500 ">
                                    <p className='uppercase text-xl font-bold bg-gray-600 text-white p-3 rounded-lg '>hr</p>
                                    <h2 className='capitalize text-lg'>{sessionUser ? sessionUser[0].name : ""}</h2>
                                </div>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:text-rose-500 cursor-pointer w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-screen justify-center flex py-6 bg-rose-700">
                <div className="w-[80%] flex text-2xl text-white gap-10">
                    <p className='hover:underline underline-offset-8 cursor-pointer'>Awards</p>
                    <p className='cursor-pointer'>Coursera</p>
                </div>
            </div>


            {/*                                            Page 1 */}


            <div className="w-screen flex flex-col items-center gap-10 bg-gray-100">
                <div className="w-full flex justify-center">
                    <div className="w-[80%]   h-[60vh] bg-[url('//localhost:3000/StudentSupportTreeImage.png')]">
                        <div className={`w-full p-10 opacity-45 bg-black flex items-end h-full`}>
                            {/* <img className='h-96 w-full' src={`${require('../../images/StudentSupportTreeImage.png')}`} alt="" /> */}
                            <h1 className='text-3xl cursor-default text-white font-bold'>{a}</h1>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] flex justify-center rounded-lg bg-white">
                    <div className="w-[94%] py-10">
                        <h1 className='capitalize pb-8 font-semibold text-xl'>My course</h1>

                        <div className="grid grid-cols-4 gap-5 ">
                            {studentcardData.map((val , index)=> (
                                    <div key={index} className="hover:text-rose-500 cursor-pointer my-3 border overflow-hidden hover:border-rose-300 hover:shadow-lg shadow-rose-400 rounded-xl">
                                        <img className='rounded-t-xl hover:scale-110 duration-500' src={val.img} alt="" />
                                        <p className='h-36 px-4 capitalize text-center text-xl pt-5 hover:underline underline-offset-4' >{val.title}</p>
                                    </div>
                                )
                            )}
                        </div>
                        <h1 className='capitalize cursor-pointer hover:underline underline-offset-4 w-fit text-rose-400 pt-8 font-semibold text-2xl'>View All Courses ({studentcardData.length})</h1>
                    </div>

                </div>

                {/* Page 2 */}

                <div  className="w-full flex justify-center">
                    <div className="w-[80%] flex gap-10">
                        <div className="w-[50%] h-fit bg-white rounded-lg"></div>


                        <div id='notice' className="w-[50%]">
                            {Notice.map((val , index) => (
                                    <div key={index} className="flex flex-col gap-4 bg-white border rounded-lg">
                                        <div className="p-8">
                                            <h1 className='text-4xl cursor-pointer font-semibold hover:underline underline-offset-4 text-rose-500'>{val.heading}</h1>
                                            <p className='py-4 text-lg text-gray-500'>{val.PostD} <span className='flex gap-3 items-center font-bold text-black'> • <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
                                            </svg> Global
                                            </span></p>
                                            <p className='text-2xl pb-3'>{val.dl}</p>
                                            <p className='text-2xl '>{val.title}</p>
                                            <p className='text-2xl pt-3'>{val.title2}</p>
                                            <h3 className='text-xl pt-5 font-bold'>{val.bottom}</h3>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>




                <div className="w-full flex justify-center">
                    <div className="flex flex-col py-14">
                        <h3 className='text-gray-500 text-center text-lg'>Powered By</h3>
                        <a className='text-3xl text-center text-gray-600 font-semibold ' href="https://github.com/harshraj30">Mai_Hu_Harsh</a>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default MasterStudentPage