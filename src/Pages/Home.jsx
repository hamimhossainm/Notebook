import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNotes } from '../Features/NoteSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {

  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [descriptionlen, setdescriptionlen] = useState(100);
  const [check, setcheck] = useState(false);
  const dispatch = useDispatch();
  const saveRef = useRef();

  const handleTextarea = (e) => {
    setdescription((description)=>e.target.value);
    const textareaLen = e.target.value.length;
    setdescriptionlen((descriptionlen)=> 100 - textareaLen);
  }

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const savedButton = document.getElementById("SaveButton");

    if( name !== "" && title !== "" && description !== "" && checked !==false){
      savedButton.style.backgroundColor="#1D4ED8"
    }else{
      savedButton.style.backgroundColor="#60A5FA"
    }
    
    setcheck((check)=>checked)
  }


  const addNewNotes = (e) => {
    e.preventDefault();

    if( name !== "" && title !== "" && description !== "" && check !==false ){
      const newNote = {
        id: Date.now() .toString(32),
        name,
        title,
        description,
      }

      setname("")
      settitle("")
      setdescription("")
      setdescriptionlen(100)
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




  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <ToastContainer/>

      <div className='container font-tre bg-gray-100 shadow-lg w-2/4 h-[550px] px-3 py-3 mt-10 esm:bg-cyan-100 esm:w-3/4 esm:mt-3 esm:h-72 sm:w-[320px] sm:h-[315px] md:h-[345px] md:bg-yellow-50 md:w-2/4 lg:h-[370px]'>


        <h1 className='text-center text-4xl font-bold text-orange-600 esm:text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] lg:text-green-700'>
              NoteBook Adding Section
        </h1>

        <form className='text-center mt-5 esm:mt-1'>

            <div className='mt-3 esm:mt-1'>
                <input onChange={(e)=>setname((name)=>e.target.value)} value={name} name='name' placeholder='Name' type="text"
                 className='w-96 h-10 rounded-md px-2 text-[20px] shadow-md outline-orange-500 esm:w-32 esm:px-2 esm:text-[8px] esm:h-4 md:w-40 md:px-3 md:h-6 md:text-[10px] lg:w-56 lg:h-8 lg:text-[14px]'/>
            </div>

            <div className='mt-3 esm:mt-1 md:mt-2'>
                <input onChange={(e)=>settitle((title)=>e.target.value)} value={title} placeholder='Project Title' type="text"
                 className='w-96 h-10 rounded-md px-2 text-[20px] shadow-md outline-orange-500 esm:w-32 esm:px-2 esm:text-[8px] esm:h-4 md:w-40 md:px-3 md:h-6 md:text-[10px] lg:w-56 lg:h-8 lg:text-[14px]'/>
            </div>

            <div className='mt-3 relative md:mt-2'>
                <textarea onChange={handleTextarea} value={description} rows={7} placeholder='Description' type="text"
                className='w-96 rounded-md px-2 text-[20px] shadow-md resize-none outline-orange-500 esm:w-32 esm:px-2 esm:text-[8px] esm:h-24 md:w-40 md:px-3 md:h-32 md:text-[10px] lg:w-56 lg:h-46 lg:text-[14px]'/>

                <p className='absolute bottom-3 left-96 text-gray-300 esm:text-[6px] esm:static esm:text-gray-500 md:text-[9px] lg:text-[12px]'>Remaining Characters {descriptionlen}</p>
            </div>

            <div className='mt-3 esm:mt-1 md:mt-2'>
                <label htmlFor="check" className='text-xl mr-2 esm:text-[10px] md:text-[12px] lg:text-[14px]'>I want to add this Task</label>
                <input onChange={handleCheck} value={check} type="checkbox" name="check" id="check" className='esm:w-2 esm:relative top-[3px] lg:w-3'/>
            </div>

            <div className='mt-3 flex justify-center items-center esm:mt-1 md:mt-2'>
                <button className='bg-gray-500 text-white text-xl rounded flex justify-center items-center px-2 mr-2 esm:text-[10px] esm:px-[2px] esm:h-4 md:text-[12px] md:px-1 lg:text-[14px] lg:px-1'>Cancel</button>
                <button onClick={addNewNotes} ref={saveRef} id='SaveButton' className='bg-blue-400 text-white text-xl rounded px-2 flex justify-center items-center esm:text-[10px] esm:px-[2px] esm:h-4 md:text-[12px] md:px-1 lg:text-[14px] lg:px-1'>Save</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Home
