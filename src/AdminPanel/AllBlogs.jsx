import React, { useEffect, useState } from 'react'
import MainHeader from '../Components/MainHeader'

import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 


const AllBlogs = () => {

    const [rowData, setRowData] = useState([])

    const columnDefs = [
        {field:'id', sortable: true, filter: true},
        {field:'title', sortable: true, filter: true},
        {field:'Description', sortable: true, filter: true},
        {field:'author', sortable: true, filter: true},
        {field:'imgUrl', sortable: true, filter: true}
      ]

      useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then((res) => res.json())
        .then(rowData => setRowData(rowData))
      },[])

  return (
    <div>
        <MainHeader />

        <div className='ag-theme-alpine' style={{height:500}}>
            <AgGridReact rowData = {rowData} columnDefs = {columnDefs} />
        </div>
    </div>
  )
}

export default AllBlogs