import React from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className='bg-gray-200 shadow-lg w-2/4 mx-auto font-tre'>
        <div className='mt-10 px-10 py-5 relative'>
          <h1 className='text-center text-orange-600 text-3xl font-bold mb-4'>Contact Information</h1>
          <h2 className='text-xl'>Name: <span className='absolute left-[300px]'>Hamim Hossain</span></h2>
          <p className='text-xl'>Email: <span className='absolute left-[300px]'>hamim.dashboard@gmail.com</span></p>
          <p className='text-xl'>Phone: <span className='absolute left-[300px]'>01904486467</span></p>
          <p className='text-xl'>Phone: <span className='absolute left-[300px]'>01333700658</span></p>
        </div>
      </div>
    </>
  )
}

export default Contact
