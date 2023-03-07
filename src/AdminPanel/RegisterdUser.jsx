import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 

const RegisterdUser = () => {

  const [rowData, setRowData] = useState([])

    const columnDefs = [
      {field:'id', sortable: true, filter: true},
      {field:'name', sortable: true, filter: true},
      {field:'email', sortable: true, filter: true},
      {field:'password', sortable: true, filter: true}
    ]
    
     
    useEffect(() => {
      fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then(rowData => setRowData(rowData))
    },[])

  return (
    <div className='ag-theme-alpine' style={{height:500, width:900}}>
        <AgGridReact rowData = {rowData} columnDefs = {columnDefs} />
    </div>
  )
}

export default RegisterdUser