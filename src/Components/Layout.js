import React from 'react'

const Layout = ({children, title}) => {
    return (
        <div className="w-screen h-screen gap-5 px-32 flex items-center justify-center  bg-red-300">
            <div className="w-1/2 h-96 bg-teal-500">{title}</div>
            <div className="w-1/2 h-96 bg-red-500">
               {children}
            </div>
        </div>
    )
}

export default Layout