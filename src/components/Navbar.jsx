import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='text-2xl flex ml-2  text-black p-2 space-x-4 justify-center'
    >   <div className=' rounded-xl w-fit text-xl shadow-sm hover:shadow-xl p-1'><NavLink to="/home"><h1 className=' cursor-pointer'>Home</h1></NavLink></div>
        <div className=' rounded-xl w-fit text-xl shadow-sm hover:shadow-xl p-1'><NavLink to="/Business"><h1 className=' cursor-pointer'>Business</h1></NavLink></div>
        <div className=' rounded-xl w-fit text-xl shadow-sm hover:shadow-xl p-1'><NavLink to="/Sport"><h1 className=' cursor-pointer'>Sport</h1></NavLink></div>
        <div className=' rounded-xl w-fit text-xl shadow-sm hover:shadow-xl p-1'><NavLink to="/signin"><h1 className=' cursor-pointer'>Signin</h1></NavLink></div>
        <div className=' rounded-xl w-fit text-xl shadow-sm hover:shadow-xl p-1'><NavLink to="/signup"><h1 className=' cursor-pointer'>Signup</h1></NavLink></div>
    </div>
  )
}

export default Navbar