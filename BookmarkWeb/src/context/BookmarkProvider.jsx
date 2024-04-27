import React, { useState, useEffect } from 'react'
import BookMarkContext from './book-mark-context';
import axios from 'axios';

function BookmarkProvider(props) {
    const URL = 'https://crudcrud.com/api/ebd5bc437ad54a6f9ba05fd70f9ad3a6/bookmark'
    const [bookMarks, setBookMarks] = useState([]);

    const addBookMark = (bookmark) =>{
        AddToAPI(bookmark);
      }

    const AddToAPI = (bookmark) =>{
        axios.post(`${URL}`, bookmark)
        .then((res)=>setBookMarks([...bookMarks,res.data]))
        .catch((err)=>console.log(err));
    }

    const removeBookMark = (id) =>{
        setBookMarks((prev)=>prev.filter((item)=>item._id !== id));
        axios.delete(`${URL}/${id}`)
      }

      useEffect(()=>{
        axios.get(`${URL}`)
        .then((res)=>setBookMarks(res.data))
        .catch((err)=>console.log(err))
      }, [])

    const updateBookMark = (id,bookmark) =>{
        axios.put(`${URL}/${id}`, bookmark)
        .then()
        .catch((err)=>console.log(err));

        setBookMarks((prev)=>{
          const updatedBookmark = [...prev];
          updatedBookmark.push({_id: id, ...bookmark});
          return updatedBookmark;
        });  
      }

    const bookmarkContext = {
        bookMarks: bookMarks,
        addBookMark: addBookMark,
        removeBookMark: removeBookMark,
        updateBookMark: updateBookMark,
        setBookMarks: setBookMarks,
    }

  return <BookMarkContext.Provider value={bookmarkContext}>
    {props.children}
  </BookMarkContext.Provider>
}

export default BookmarkProvider