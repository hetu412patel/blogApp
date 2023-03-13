import React from 'react'
// import { useLocation } from 'react-router-dom'
import AdminHeader from '../Components/AdminHeader'
import Box from '@mui/material/Box';


const AdminPage = () => {
    // const location = useLocation()
  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
      <AdminHeader />
      <Box component="main" sx={{ flexGrow: 1, p: 3, m:10 }}>
        
      <div className="content" style={{textAlign:"center"}}>
            <h1>Welcome, Admin</h1>
            <p>Explore user list and blogs here...!!</p>
            <img src="../../Images/admin.avif" alt="analysis" style={{height:"65vh", width:"60vw"}}/>
      </div>
      </Box>
    </Box>
    </>
  )
}

export default AdminPage