import React, { useEffect, useState } from 'react'

import { AgGridReact } from 'ag-grid-react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import AddBlogs from '../AdminPanel/AddBlog'
// import { toast } from 'react-toastify';

import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 
import AdminHeader from '../Components/AdminHeader';
// import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {

    const [rowData, setRowData] = useState([])
    // const navigate = useNavigate()

    const editHandler = (rowData) => {
      console.log("edit", rowData)
      // navigate("/editBlog/"+id)
    }

    const deleteHandler = (rowData) => {
      if(window.confirm("Do you want to removed this blog?")){
        // for(let i in rowData){
        //   console.log("delete",rowData[i].id);
        // }
        console.log("delete",rowData);
      }
    }

    const columnDefs = [
        {field:'id', sortable: true, filter: true },
        {field:'title', sortable: true, filter: true },
        {field:'description', sortable: true, filter: true, width: 550, maxWidth: 900},
        {field:'author', sortable: true, filter: true},
        {field:'category', sortable: true, filter: true},
        {field:'action', cellRenderer : () => <div><EditIcon style={{cursor:"pointer", color:"green"}} onClick={()=>{editHandler(rowData)}} /><DeleteIcon style={{cursor:"pointer", color:"red",marginLeft:"2vw"}} onClick={()=>{deleteHandler(rowData)}} /></div> }
      ]

      useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then((res) => res.json())
        .then(rowData => {setRowData(rowData)})
      },[])

  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
        <AdminHeader />
    <Box component="main" sx={{ flexGrow: 1, p: 3, m:10 }}>
        <AddBlogs />
        <div className='ag-theme-alpine' style={{height:500}}>
            <AgGridReact rowData = {rowData} columnDefs = {columnDefs} />
        </div>
      </Box>
    </Box>
    </>
  )
}

export default AllBlogs