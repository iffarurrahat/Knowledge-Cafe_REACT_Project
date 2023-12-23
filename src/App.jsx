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

  const handleMarkAsRead = time => {
    const newReadingTime = (readingTime + time)
    setReadingTime(newReadingTime);
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
