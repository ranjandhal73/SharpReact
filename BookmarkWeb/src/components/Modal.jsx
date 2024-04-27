import React, { useEffect, useContext } from 'react'
import { createPortal } from 'react-dom'
import BookMarkContext from '../context/book-mark-context';
import { useState } from 'react';

function Modal({onClose, editBookmarkData}) {
    const modaltoShow = document.getElementById('modal');
    const [title, setTitle] = useState ('');
    const [url, setUrl] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const {addBookMark, updateBookMark} = useContext(BookMarkContext);

    useEffect(()=>{
        if(editBookmarkData){
            setTitle(editBookmarkData.title);
            setUrl(editBookmarkData.url)
            setIsEditMode(true)
        }
    }, [editBookmarkData])

    const handleBookMark = () =>{
        if(isEditMode && editBookmarkData){
            const id = editBookmarkData._id;
            updateBookMark(id,{title, url});
            setIsEditMode(false);
            setTitle('');
            setUrl('');
            onClose();
        }else{
            addBookMark({title,url});
            setTitle('');
            setUrl('');
            onClose();
        }

    }
  return createPortal(
    <div className='flex items-center justify-center'>
    <div className='bg-gray-400 flex items-center justify-center w-[50%]'>
        <div className='flex flex-col bg-white px-[2rem] py-[4rem]'> 
            <label className=''>
                Enter Bookmark Title:
                <input className='border-2 border-black block'
                    type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </label>
            <label>
                Enter Bookmark URL:
                <input className='border-2 border-black block'
                    type="text" 
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                />
            </label>
            <button onClick={handleBookMark}
                className='mt-4 bg-green-700 px-4 py-1 text-white'
                
            >{isEditMode ? 'Update' : 'Save'}</button>
        </div>
        <button onClick={onClose}>Ok</button>
    </div>
    </div>,modaltoShow
  );
}

export default Modal