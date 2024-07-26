import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotes } from '../Features/NoteSlice';
import Update from '../Componenets/Update';


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
    console.log(next);
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
          <div className='grid grid-cols-5 gap-x-20 px-4 py-3 font-bold text-2xl shadow-lg text-orange-600'>
            <p>Id</p>
            <p>Name</p>
            <p>Project Title</p>
            <p>Desccription</p>
            <p>Action</p>
          </div>

          

          <div>
          {
            notes ?.slice(0,next) .map((note)=>(
              <div key={note.id} className='grid grid-cols-5 gap-x-20 px-4 py-3 text-gray-500 h-20'>
                <p>{note.id}</p>
                <p>{note.name}</p>
                <p>{note.title}</p>
                <p>{note.description}</p>
              <div>
                  <button onClick={()=>handleRemove(note.id)} className='bg-red-700 text-white rounded text-sm px-2 mr-2'>Remove</button>
                  <button onClick={()=>handleUpdate(note)} className='bg-gray-700 text-white rounded text-sm px-2'>Update</button>
                </div>
              </div>
            ))
          }
          </div>

          {
            next < notes.length && (
              <button onClick={handleLoadMore} className='block mx-auto rounded bg-cyan-700 text-white px-2 mt-2'>Load More</button>
            )
          }

          
        </div>
      </div>
    </>
  )
}

export default Taskview
