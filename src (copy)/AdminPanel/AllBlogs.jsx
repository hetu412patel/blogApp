import React, { useEffect } from 'react'

import { AgGridReact } from 'ag-grid-react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import AddBlogs from '../AdminPanel/AddBlog'
import { useDispatch,useSelector } from 'react-redux';
import { addBlog } from '../Store/blogSlice';

import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 
import AdminHeader from '../Components/AdminHeader';

const AllBlogs = () => {

  const blog = useSelector((state) => state.app.blog)
  const dispatch = useDispatch()
  
  const editHandler = (id) => {
    console.log("edit",id);
  }

  const deleteHandler = (id) => {
    if(window.confirm("Do you want to delete?")){

      console.log("delete",id);
    }
    }

    const columnDefs = [
        {field:'title', sortable: true, filter: true},
        {field:'description', sortable: true, filter: true, width: 550, maxWidth: 900},
        {field:'author', sortable: true, filter: true},
        {field:'category', sortable: true, filter: true},
        {field:'action', cellRenderer : (e) => <div>{console.log(e)}<EditIcon style={{cursor:"pointer", color:"green"}} onClick={()=>editHandler(e.data.id)} /><DeleteIcon style={{cursor:"pointer", color:"red",marginLeft:"2vw"}} onClick={()=>deleteHandler(e.data.id)}/></div> }
      ]

      useEffect(() => {
          dispatch(addBlog())
      },[dispatch])

  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
        <AdminHeader />
    <Box component="main" sx={{ flexGrow: 1, p: 3, m:10 }}>
        <AddBlogs />
        <div className='ag-theme-alpine' style={{height:500}}>
            <AgGridReact rowData = {blog} columnDefs = {columnDefs} animateRows={true} />
        </div>
      </Box>
    </Box>
    </>
  )
}

export default AllBlogs