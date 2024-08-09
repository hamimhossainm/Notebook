import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='bg-black text-white font-tre flex justify-between items-center w-full h-24 pl-20 pr-20 border-2 border-gray-50 esm:h-10 esm:pl-4 esm:pr-4 sm:h-12 sm:pl-5 sm:pr-5 md:h-14 md:pl-6 md:pr-6 lg:h-20 lg:pl-7 lg:pr-7'> 
            
            <h1 className='text-4xl font-bold esm:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]'>
              NoteBook
            </h1>

            <ul className='flex gap-x-10 text-xl font-bold text-orange-300 esm:gap-x-3 esm:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[15px] lg:gap-x-8'>
                <Link to='/'>Home</Link>
                <Link to='/taskview'>Taskview</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar
