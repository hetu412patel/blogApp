import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:"pointer"}}>
                            BlogApp
                        </Typography>

                        <div style={{ margin: '5px 20px'}}>
                            <NavLink 
                                to='/' 
                                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' , fontWeight: isActive ? 'bolder' : 'normal', textDecoration: 'none' })}
                                >
                                Home
                            </NavLink>
                        </div>

                        <div style={{ margin: '5px 20px'}}>
                            <NavLink 
                                to='/about' 
                                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' , fontWeight: isActive ? 'bolder' : 'normal' , textDecoration: 'none'})}
                                >
                                About
                            </NavLink>
                        </div>

                        {/* <div style={{ margin: '5px 20px'}}>
                            <NavLink 
                                to='/addBlog' 
                                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' , fontWeight: isActive ? 'bolder' : 'normal', textDecoration: 'none' })}
                                >
                                AddBlog
                            </NavLink>
                        </div>*/}

                        <div style={{ margin: '5px 20px'}}>
                            <NavLink 
                                to='/login' 
                                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' , fontWeight: isActive ? 'bolder' : 'normal', textDecoration: 'none' })}
                                >
                                Login
                            </NavLink>
                        </div> 

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header