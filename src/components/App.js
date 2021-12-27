import React from "react";
import {Routes, Route} from 'react-router-dom';
import {Home , Navbar , CreatePost , PostDetail} from './';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      
      <Routes>
        <Route  path='/' element={<Home />}></Route>
        <Route  path='/post/:postId' element={<PostDetail />}></Route>
        <Route  path='/create-post' element={<CreatePost />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
