import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='bg-black text-white font-tre flex justify-between items-center w-full h-24 pl-20 pr-20 border-2 border-gray-50 esm:h-10 esm:pl-4 esm:pr-4'> 
            <h1 className='text-4xl font-bold esm:text-[16px]'>NoteBook</h1>

            <ul className='flex gap-x-10 text-xl font-bold text-orange-300 esm:gap-x-3 esm:text-[8px]'>
                <Link to='/'>Home</Link>
                <Link to='/taskview'>Taskview</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar
