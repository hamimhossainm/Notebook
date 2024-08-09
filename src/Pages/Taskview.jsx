import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotes } from '../Features/NoteSlice';
import Update from '../Componenets/Update';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const Taskview = () => { 

  const notes = useSelector((state)=>state.storedNotes.notes);
  const dispatch = useDispatch();
  const initialRow = 3;
  const [next, setnext] = useState(initialRow);
  const [visible, setvisible] = useState(false);
  const [editename, seteditename] = useState("");
  const [edittitle, setedittitle] = useState("");
  const [editdescription, seteditdescription] = useState("");
  const [editId, seteditId] = useState()

  const handleRemove = (id) => {
    dispatch(deleteNotes(id))
  }

  const handleLoadMore = () => {
    setnext((next)=>next+2);
  }

  const handleUpdate = (note) => {
    setvisible((visible)=>true)
    seteditename((editename)=>note.name)
    setedittitle((edittitle)=>note.title)
    seteditdescription((editdescription)=>note.description)
    seteditId((editId)=>note.id)
  }

  if(visible){
    return <Update setvisible={setvisible} 
    editename={editename} 
    edittitle={edittitle} 
    editdescription={editdescription} 
    editId={editId}
    seteditename={seteditename}
    setedittitle={setedittitle}
    seteditdescription={seteditdescription}
    />
  }

  return (
    <>
    <Helmet>
      <title>Taskview</title>
    </Helmet>


      <div className='container font-tre'>
        <div className='bg-gray-100 mt-10 w-3/4 mx-auto shadow-md'>
          <div className='text-center grid grid-cols-5 gap-x-20 px-4 py-3 font-bold text-2xl shadow-lg text-orange-600 esm:text-[8px] esm:gap-x-1 esm:px-0 esm:py-1 sm:text-[10px] md:text-[12px] lg:text-[15px]'>
            <p>Id</p>
            <p>Name</p>
            <p>Project Title</p>
            <p>Desccription</p>
            <p>Action</p>
          </div>

          

          <div>
          {
            notes ?.slice(0,next) .map((note)=>(
              <div key={note.id} className='text-center grid grid-cols-5 gap-x-20 px-2 py-3 text-gray-500 max-h-20 text-wrap esm:text-[6px] esm:gap-x-1 esm:px-0 esm:py-1 sm:text-[8px] md:text-[10px] lg:text-[13px]'>
                <p>{note.id}</p>
                <p>{note.name}</p>
                <p>{note.title}</p>
                <p>{note.description}</p>

                <div>
                  <button onClick={()=>handleRemove(note.id)} className='bg-red-800 text-white rounded-full p-[2px] mr-1'><MdDelete /></button>
                  <button onClick={()=>handleUpdate(note)} className='bg-black text-white p-[2px]'><FaEdit /></button>
                </div>
                
              </div>
            ))
          }
          </div>

          {
            next < notes.length && (
              <button onClick={handleLoadMore} className='block mx-auto rounded bg-cyan-700 text-white px-2 mt-2 sm:text-[12px] '>Load More</button>
            )
          }

          
        </div>
      </div>
    </>
  )
}

export default Taskview
