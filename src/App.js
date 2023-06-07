import { Route,Routes } from 'react-router-dom';
import "./app.css"
import LandingPage from './pages/LandingPage';
import BookReview from './pages/BookReview';
import About from './pages/About';
import AllBlogs from './pages/AllBlogs';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <Route path='' element={<LandingPage/>}></Route>
          <Route path="blog">
            <Route path="the_alchemist" element={<BookReview/>}></Route>
          </Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='search' element={<AllBlogs/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
