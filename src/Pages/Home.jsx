import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNotes } from '../Features/NoteSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {

  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [check, setcheck] = useState();
  const [description, setdescription] = useState("");
  const [descriptionlen, setdescriptionlen] = useState(100);
  const dispatch = useDispatch();
  const saveRef = useRef();

  const handleTextarea = (e) => {
    setdescription((description)=>e.target.value);
    const textareaLen = e.target.value.length;
    setdescriptionlen((descriptionlen)=> 100 - textareaLen);
  }


  const addNewNotes = (e) => {
    e.preventDefault();

    if(name!=="" && title!=="" && description!=="" && check!==false){
      const newNote = {
        id: Date.now() .toString(32),
        name,
        title,
        description,
      }

      setname("")
      settitle("")
      setdescription("")
      dispatch(addNotes(newNote));

      toast.success('Successfully Task Added', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    }else{
      
      toast.error('Please Insert all the input fields', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
    } 
  }

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const savedButton = document.getElementById("SaveButton");
    if(name!=="" && title!=="" && description!=="" && checked===true){
      savedButton.style.backgroundColor="#1D4ED8"
    }else{
      savedButton.style.backgroundColor="#60A5FA"
    }
    setcheck((check)=>checked)
  }



  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <ToastContainer/>
      <div className='bg-gray-100 w-2/4 mx-auto py-10 font-tre mt-10 shadow-lg relative'>
        <div className='container bg-gray-100 w-2/4'>
          <h1 className='text-3xl font-bold absolute left-[165px] bottom-[390px] text-orange-700'>NoteBook Adding Section</h1>
          <form className='mx-auto block'>
            
            <div className='mt-3'>
              <input onChange={(e)=>setname((name)=>e.target.value)} value={name} placeholder='Name' type="text" name='name' className='rounded border-2 shadow-md outline-none px-2 py-1 w-80' />
            </div>

            <div className='mt-3'>
              <input onChange={(e)=>settitle((title)=>e.target.value)} value={title} placeholder='Project Title' type="text" className='rounded border-2 shadow-md outline-none px-2 py-1 w-80' />
            </div>

            <div className='mt-3'>
              <textarea onChange={handleTextarea} value={description} placeholder='Description' rows={6} type="text" className='resize-none rounded border-2 shadow-md outline-none px-2 py-1 w-80' />
              <p className='absolute bottom-[120px] left-[320px] text-sm text-gray-300'>Remaining Characters {descriptionlen}</p>
            </div>

            <div className='mt-3'>
              <label className='ml-20 mr-2' htmlFor="check">I want to add this Task</label>
              <input onChange={handleCheck} value={check} className='' type="checkbox" name="check" id="check" />
            </div>

            <div className='mt-3 text-center'>
              <button className='rounded px-2 bg-gray-100 text-black'>Cancel</button>
              <button ref={saveRef} id='SaveButton' onClick={addNewNotes} className='rounded px-2 bg-blue-400 text-white'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
