import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  // bookmark count
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    // console.log(blog);

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // mark as read count
  const [readingtime, setReadingTime] = useState(0);

  const handleAddToMarkAsRead = time => {
    // console.log('time', time);

    const newReadingTime = readingtime + time;
    setReadingTime(newReadingTime);
    // console.log(newRead);
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto md:flex md:gap-10'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleAddToMarkAsRead={handleAddToMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingtime={readingtime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
