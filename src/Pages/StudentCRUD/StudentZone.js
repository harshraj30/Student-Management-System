import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StudentZone = ({url}) => {

  const [sessionUser , setSessionUser ] = useState()


  useEffect(() => {
    axios.get(url+'/users/'+localStorage.getItem('user')).then((res)=>{
      setSessionUser(res.data);
    })
  }, [])

  return (
    <Nav>
      <div className="w-screen">



        <>

          <div className="w-full flex justify-center">
            <div className="w-[80%] flex bg-gray-200">
              <div className="w-[75%] gap-8 p-8 grid grid-cols-3">
                <Link to="/StudentDetails">
                  <div className="border rounded-xl hover:shadow-lg hover:shadow-black duration-300 cursor-pointer flex py-5  justify-center bg-white ">
                    <div className="">
                      <img src={`${require('../../images/student-details.png')}`} alt="" />
                      <h1 className='text-center text-xl pt-5'>Student Details</h1>
                    </div>
                  </div>
                </Link>
                <Link to="/IdentityCard">
                  <div className="border rounded-xl hover:shadow-lg hover:shadow-black duration-300 cursor-pointer flex py-5  justify-center bg-white ">
                    <div className="">
                      <img src={`${require('../../images/icard.png')}`} alt="" />
                      <h1 className='text-center text-xl pt-5'>Identity Card</h1>
                    </div>
                  </div>
                </Link>
                <Link to="/Syllabus">
                  <div className="border rounded-xl hover:shadow-lg hover:shadow-black duration-300 cursor-pointer flex py-5  justify-center bg-white ">
                    <div className="">
                      <img src={`${require('../../images/syllabus.png')}`} alt="" />
                      <h1 className='text-center text-xl pt-5'>Syllabus</h1>
                    </div>
                  </div>
                </Link>
                <Link to="/MasterStudentPage">
                  <div className="border rounded-xl hover:shadow-lg hover:shadow-black duration-300 cursor-pointer flex py-5  justify-center bg-white ">
                    <div className="">
                      <img src={`${require('../../images/books.png')}`} alt="" />
                      <h1 className='text-center text-xl pt-5'>Books</h1>
                    </div>
                  </div>
                </Link>
                <Link to="/MasterStudentPage">
                  <div className="border rounded-xl hover:shadow-lg hover:shadow-black duration-300 cursor-pointer flex py-5  justify-center bg-white ">
                    <div className="">
                      <img src={`${require('../../images/video.png')}`} alt="" />
                      <h1 className='text-center text-xl pt-5'>Video</h1>
                    </div>
                  </div>
                </Link>
                <Link to="/MasterStudentPage#notice">
                  <div className="border rounded-xl hover:shadow-lg hover:shadow-black duration-300 cursor-pointer flex py-5  justify-center bg-white ">
                    <div className="">
                      <img src={`${require('../../images/notice.png')}`} alt="" />
                      <h1 className='text-center text-xl pt-5'>Notice</h1>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-[25%] flex flex-col items-center bg-rose-50">
                <div className="w-full bg-rose-500">
                  <h1 className='text-center text-3xl font-semibold text-white py-3'>Student Details</h1>
                </div>
                <div className="flex flex-col gap-10 justify-center h-full">
                  <div className="flex justify-center">
                    <div className="">
                      <img className='w-36 h-36 rounded-full' src={`${require('../../images/HarshImage.jpeg')}`} alt="" />
                    </div>
                  </div>

                  <div className="capitalize felx flex-col gap-8 text-xl">
                    <h1 className='text-gray-500'>name : <span className='text-black font-bold px-3'>{sessionUser ? sessionUser[0].name : ""}</span></h1>
                    <h1 className='text-gray-500'>Course : <span className='text-black font-bold px-3'>{sessionUser ? sessionUser[0].course : ""}</span></h1>
                    <h1 className='text-gray-500'>d.o.b. : <span className='text-black font-bold px-3'>{sessionUser ? sessionUser[0].dob : ""}</span></h1>
                    <h1 className='text-gray-500'>session : <span className='text-black font-bold px-3'>{sessionUser ? sessionUser[0].session : ""}</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>


      </div>
    </Nav>
  )
}

export default StudentZone