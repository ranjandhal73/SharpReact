import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import { useState, useContext } from 'react';
import BookmarkProvider from './context/BookmarkProvider';
import BookMarkContext from './context/book-mark-context';




function App() {
  const [showModal, setShowModal] = useState (false); 


  

  const closeModal = ()=>{
      setShowModal(false);
  }

  const openModal = ()=>{
      setShowModal(true);
  }

  

  return (
    <BookmarkProvider>
      <BookmarkForm onOpen={openModal} onClose={closeModal} onShow={showModal}/>
      <BookmarkList onOpen={openModal} onClose={closeModal} />
    </BookmarkProvider>
  )
}

export default App
