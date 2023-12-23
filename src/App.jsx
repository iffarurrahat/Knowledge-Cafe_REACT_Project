import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'
import Container from './components/ui/Container'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = (readingTime + time)
    setReadingTime(newReadingTime);
    // remove the read blog from the bookmark
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }


  return (
    <>
      <Header></Header>
      <Container>
        <div className='md:flex gap-6'>
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleBookmarks={handleBookmarks}></Blogs>
          <BookMarks
            readingTime={readingTime}
            bookmarks={bookmarks}></BookMarks>
        </div>
      </Container>
    </>
  )
}

export default App


npm run build
//or
yarn build