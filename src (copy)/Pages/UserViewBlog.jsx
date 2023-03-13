import React, { useEffect, useState } from 'react'
import UserHeader from '../Components/UserHeader'
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 


const AllBlogs = () => {

    const [rowData, setRowData] = useState([])

    const viewHandler = (e) => {

        return <Link to={`/blogDetail/${e.data.id}`} style={{textDecoration:"none", color:"black", fontWeight:"bolder"}}>{e.value}</Link>
    }

    const columnDefs = [
        {field:'id', sortable: true, filter: true, floatingFilter: true},
        {field:'title', sortable: true, filter: true, floatingFilter: true, cellRenderer: viewHandler},
        {field:'description', sortable: true, filter: true, floatingFilter: true, width: 550, maxWidth: 900},
        {field:'author', sortable: true, filter: true, floatingFilter: true},
        {field:'category', sortable: true, filter: true, floatingFilter: true},
      ]

      useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then((res) => res.json())
        .then(rowData => setRowData(rowData))
      },[])

  return (
    <>
        <UserHeader />
        
        <div>
            <div className='ag-theme-alpine' style={{height:500}}>
                <AgGridReact 
                  rowData = {rowData} 
                  columnDefs = {columnDefs} 
                  pagination={true} 
                  // paginationPageSize={5}
                  paginationAutoPageSize={true}
                  animateRows={true}
                />
            </div>
        </div>
    </>
  )
}

export default AllBlogs