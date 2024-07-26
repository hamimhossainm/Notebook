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
      <div className='bg-gray-100 w-2/4 mx-auto py-10 font-tre mt-10 shadow-lg relative'>
        <div className='container bg-gray-100 w-2/4'>
            <div>
                <h1 className='text-3xl font-bold absolute left-[165px] bottom-[390px] text-orange-700'>NoteBook Update Section</h1>
                <div className='absolute left-[650px] bottom-[430px]'>
                    <button onClick={()=>setvisible(false)} className='rounded bg-red-800 text-white px-2'>Close</button>
                </div>
                
                <form className='mx-auto block'>
                    <div className='mt-3'>
                        <input onChange={(e)=>seteditename((editename)=>e.target.value)} value={editename} placeholder='Name' type="text" name='name' className='rounded border-2 shadow-md outline-none px-2 py-1 w-80' />
                    </div>

                    <div className='mt-3'>
                        <input onChange={(e)=>setedittitle((edittitle)=>e.target.value)} value={edittitle}  placeholder='Project Title' type="text" className='rounded border-2 shadow-md outline-none px-2 py-1 w-80' />
                    </div>

                    <div className='mt-3'>
                        <textarea onChange={handleTextarea} value={editdescription} placeholder='Description' rows={6} type="text" className='resize-none rounded border-2 shadow-md outline-none px-2 py-1 w-80' />
                        <p className='absolute bottom-[120px] left-[320px] text-sm text-gray-300'>Remaining Characters {descriptionlen}</p>
                    </div>

                    <div className='mt-3'>
                        <label className='ml-[46px] mr-2' htmlFor="check">I want to Update this Task</label>
                        <input className='' type="checkbox" name="check" id="check" />
                    </div>

                    <div className='mt-3 text-center'>
                        <button onClick={handleUpdateButton} id='updateButton'  className='rounded px-2 bg-gray-600 text-white'>Update</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Update
