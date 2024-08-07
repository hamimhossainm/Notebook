import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateNotes } from '../Features/NoteSlice'

const Update = ({setvisible,editename,edittitle,editdescription,editId,seteditename,setedittitle,seteditdescription}) => {

    const dispatch = useDispatch()

    const handleUpdateButton = () => {
        const updatedValue = {
            id:editId,
            name:editename,
            title:edittitle,
            description:editdescription
        }
        dispatch(updateNotes(updatedValue))
    }

    const [description, setdescription] = useState("");
    const [descriptionlen, setdescriptionlen] = useState(100);

    const handleTextarea = (e) => {
        setdescription((description)=>e.target.value);
        const textareaLen = e.target.value.length;
        setdescriptionlen((descriptionlen)=> 100 - textareaLen);
        seteditdescription((editdescription)=>e.target.value)
      }


  return (
    <>
      <div className='container relative font-tre bg-gray-100 shadow-lg w-2/4 h-[550px] px-3 py-3 mt-10'>
        <h1 className='text-center text-4xl font-bold text-orange-600'>NoteBook Update Section</h1>
        <button onClick={()=>setvisible(false)} className='absolute left-[750px] bottom-[520px] rounded text-white bg-red-700 px-2'>Close</button>
        <form className='text-center mt-5'>
          <div className='mt-3'>
            <input onChange={(e)=>seteditename((editename)=>e.target.value)} value={editename} name='name' placeholder='Name' type="text"
            className='w-96 h-10 rounded-md px-2 text-[20px] shadow-md outline-orange-500'/>
          </div>

          <div className='mt-3'>
            <input onChange={(e)=>setedittitle((edittitle)=>e.target.value)} value={edittitle} placeholder='Project Title' type="text"
            className='w-96 h-10 rounded-md px-2 text-[20px] shadow-md outline-orange-500'/>
          </div>

          <div className='mt-3 relative'>
            <textarea onChange={handleTextarea} value={editdescription} rows={7} placeholder='Description' type="text"
            className='w-96 rounded-md px-2 text-[20px] shadow-md resize-none outline-orange-500'/>
            <p className='absolute bottom-3 left-96 text-gray-300'>Remaining Characters {descriptionlen}</p>
          </div>

          <div className='mt-3'>
            <label htmlFor="check" className='text-xl mr-2'>I want to update this Task</label>
            <input type="checkbox" name="check" id="check" />
          </div>

          <div className='mt-3'>
            <button onClick={handleUpdateButton} id='updateButton'  className='rounded px-2 bg-gray-600 text-white'>Update</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Update
