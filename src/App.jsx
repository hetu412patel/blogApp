import React from "react";
// import RegisterdUser from "./AdminPanel/RegisterdUser"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Header from "./Components/Header";
import About from "./Pages/About";
import AddEditBlog from "./Pages/AddEditBlog";
import Blog from "./Pages/Blog";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <ToastContainer />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addBlog' element={<AddEditBlog />}></Route>
          <Route path='/editBlog/:id' element={<AddEditBlog />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    // <RegisterdUser />
  );
}

export default App;
