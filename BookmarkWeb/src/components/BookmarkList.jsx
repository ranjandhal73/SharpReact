import React, {useState, useContext} from 'react'
import Button from './Button'
import BookMarkContext from '../context/book-mark-context';
import Modal from './Modal';

function BookmarkList({onClose, addBookMark}) {
    const {bookMarks, removeBookMark, setBookMarks} = useContext(BookMarkContext);
    const [editBookmarkData, setEditBookmarkData] = useState(null);


    const deleteBookmark = (_id) =>{
        removeBookMark(_id)
    }

    const editBookmark = (bookmark) =>{
        const updatedBookmark = bookMarks.filter((item)=>{
          return  item._id !== bookmark._id
        })
        setBookMarks(updatedBookmark);
        setEditBookmarkData(bookmark);
        onClose();
    }

  return (
    <div>
        <h1>All BookMarks</h1>
        <div>
            {bookMarks.map((item)=>(
               
                <div key={item._id} className='flex items-center gap-4'>
                    <div>{item.title}</div>
                    <a href={item.url} target='_blank'>{item.url}</a> 
                    <div onClick={()=>deleteBookmark(item._id)}><Button title='Delete'/></div>
                    <div onClick={()=>editBookmark(item)}><Button title='Edit'/></div>
                </div>
                
            ))}
        </div>
            {editBookmarkData && (
                <Modal editBookmarkData={editBookmarkData} onClose={onClose}/>
            )}
    </div>
  )
}

export default BookmarkList