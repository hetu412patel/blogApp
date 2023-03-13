import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Box from '@mui/material/Box';


import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 
import AdminHeader from '../Components/AdminHeader';

const RegisterdUser = () => {

  const [rowData, setRowData] = useState([])

    const columnDefs = [
      {field:'id', sortable: true, filter: true},
      {field:'name', sortable: true, filter: true},
      {field:'email', sortable: true, filter: true},
      {field:'password', sortable: true, filter: true},
      {field:'cpassword', sortable: true, filter: true},
      {field:'role', sortable: true, filter: true},
      {field:'country', sortable: true, filter: true},
      {field:'address', sortable: true, filter: true},
      {field:'gender', sortable: true, filter: true}
    ]
    
    useEffect(() => {
      fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then(rowData => {setRowData(rowData)})
    },[])

  return (
    <>
    
      <Box sx={{ display: 'flex' }}>
        <AdminHeader />
      <Box component="main" sx={{ flexGrow: 1, p: 3, m:10 }}>
        <div className='ag-theme-alpine' style={{ height:600}}>
          <AgGridReact rowData = {rowData} columnDefs = {columnDefs} />
        </div>
      </Box>
      </Box>
    </>
  )
}

export default RegisterdUser