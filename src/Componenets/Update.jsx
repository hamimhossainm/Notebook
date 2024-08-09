import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateNotes } from '../Features/NoteSlice'
import { FaWindowClose } from "react-icons/fa";

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
      <div className='container relative font-tre bg-gray-100 shadow-lg w-2/4 h-[550px] px-3 py-3 mt-10 esm:bg-cyan-100 esm:w-3/4 esm:mt-3 esm:h-72 sm:w-[320px] sm:h-[315px] md:h-[345px] md:bg-yellow-50 md:w-2/4 lg:h-[370px]'>

        <h1 className='text-center text-4xl font-bold text-orange-600 esm:text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] lg:text-green-700'>
          NoteBook Update Section
        </h1>

        <button onClick={()=>setvisible(false)} className='absolute left-[610px] bottom-[330px] text-red-800 rounded-full p-[2px]'><FaWindowClose /></button>
        
        <form className='text-center mt-5 esm:mt-1'>

          <div className='mt-3 esm:mt-1'>
            <input onChange={(e)=>seteditename((editename)=>e.target.value)} value={editename} name='name' placeholder='Name' type="text"
            className='w-96 h-10 rounded-md px-2 text-[20px] shadow-md outline-orange-500 esm:w-32 esm:px-2 esm:text-[8px] esm:h-4 md:w-40 md:px-3 md:h-6 md:text-[10px] lg:w-56 lg:h-8 lg:text-[14px]'/>
          </div>

          <div className='mt-3 esm:mt-1 md:mt-2'>
            <input onChange={(e)=>setedittitle((edittitle)=>e.target.value)} value={edittitle} placeholder='Project Title' type="text"
            className='w-96 h-10 rounded-md px-2 text-[20px] shadow-md outline-orange-500 esm:w-32 esm:px-2 esm:text-[8px] esm:h-4 md:w-40 md:px-3 md:h-6 md:text-[10px] lg:w-56 lg:h-8 lg:text-[14px]'/>
          </div>

          <div className='mt-3 relative md:mt-2'>
            <textarea onChange={handleTextarea} value={editdescription} maxLength={100} rows={7} placeholder='Description' type="text"
            className='w-96 rounded-md px-2 text-[20px] shadow-md resize-none outline-orange-500 esm:w-32 esm:px-2 esm:text-[8px] esm:h-24 md:w-40 md:px-3 md:h-32 md:text-[10px] lg:w-56 lg:h-46 lg:text-[14px]'/>
            
            <p className='absolute bottom-3 left-96 text-gray-300 esm:text-[6px] esm:static esm:text-gray-500 md:text-[9px] lg:text-[12px]'>Remaining Characters {descriptionlen}</p>
          </div>

          <div className='mt-3 esm:mt-1 md:mt-2'>
            <label htmlFor="check" className='text-xl mr-2 esm:text-[10px] md:text-[12px] lg:text-[14px]'>I want to update this Task</label>
            <input type="checkbox" name="check" id="check" className='esm:w-2 esm:relative top-[3px] lg:w-3' />
          </div>

          <div className='mt-3 esm:mt-0 md:mt-2'>
            <button onClick={handleUpdateButton} id='updateButton'  className='rounded px-2 bg-gray-600 text-white esm:text-[10px] esm:px-[2px] esm:h-4 md:text-[12px] md:px-1 lg:text-[14px] lg:px-1'>Update</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Update
