import React from 'react'
import Button from './Button'
import Modal from './Modal';

function BookmarkForm({onOpen, onClose, onShow}) {
   
  return (
    <div className='flex flex-col items-center '>
        <h1 className='text-2xl'>Bookmark Website</h1>
        <div onClick={onOpen}><Button title='Add New'/></div>
        {onShow && <Modal onClose={onClose}/>}
    </div>
  )
}

export default BookmarkForm;