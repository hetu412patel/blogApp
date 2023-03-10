import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegisterdUser from "./AdminPanel/RegisterdUser"
import About from "./Pages/About";
import AddBlog from "./AdminPanel/AddBlog";
import EditBlog from "./AdminPanel/EditBlog";
import Blog from "./Pages/Blog";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import UserViewBlog from './Pages/UserViewBlog'
import UserHeader from './Components/UserHeader'
// import AllBlogs from "./AdminPanel/AllBlogs";

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addBlog' element={<AddBlog />}></Route>
          <Route path='/editBlog/:id' element={<EditBlog />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/userHeader' element={<UserHeader />}></Route>
          {/* <Route path='/allblogs' element={<AllBlogs />}></Route> */}
          <Route path='/registerUser' element={<RegisterdUser />}></Route>
          <Route path='/userviewblog' element={<UserViewBlog />}></Route>
          <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
