import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 

const RegisterdUser = () => {

  const [rowData, setRowData] = useState([])

    const columnDefs = [
      {field:'Id', sortable: true, filter: true},
      {field:'Full-name', sortable: true, filter: true},
      {field:'Email', sortable: true, filter: true},
      {field:'Passsword', sortable: true, filter: true},
      {field:'Confirm-password', sortable: true, filter: true},
      {field:'Country', sortable: true, filter: true},
      {field:'Address', sortable: true, filter: true},
      {field:'Gender', sortable: true, filter: true}
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