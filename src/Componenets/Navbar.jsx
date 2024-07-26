import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-black shadow-2xl border-2 border-white'>
        <div className='container flex justify-between items-center font-tre px-10 py-3'>
            <div className='text-white font-bold text-2xl'>
                <h1>NoteBook</h1>
            </div>

            <div className='text-white font-bold'>
                <ul className='flex gap-x-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/taskview'>Taskview</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
