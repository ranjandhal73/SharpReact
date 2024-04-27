
import { createContext } from "react";

const BookMarkContext = createContext ({
    bookMarks: [],
    setBookMarks: ()=>{},
    addBookMark: (bookmark) => {},
    removeBookMark: (id) => {},
    updateBookMark: (id, bookmark) => {},
});

export default BookMarkContext;
// export const BookMarkProvider = BookMarkContext.Provider;

// const useBookMark = () => {
//     return useContext(BookMarkContext);
// }
// export default useBookMark;