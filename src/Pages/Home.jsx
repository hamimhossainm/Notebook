import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div>
        <div>
          <h1>NoteBook Adding Section</h1>

          <form>
            <div className='mt-3'>
              <input type="text" placeholder='Name' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
