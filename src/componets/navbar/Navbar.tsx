import React from "react";
import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
            <>
              <AppBar position="static" 
              style={{backgroundColor: "#e789d0"}}>
                <Toolbar variant="dense" >

                  <Box display={'flex'} 
                  justifyContent={'space-between'} 
                  width={'100%'} >

                    <Box style={{ cursor: 'pointer' }}>
                      <Typography variant="h5"
                      color="inherit">
                        Blog Pessoal
                      </Typography>

                    </Box>
        
                    <Box display="flex" 
                    justifyContent="start">

                      <Box mx={1} 
                      style={{ cursor: 'pointer' }}>
                        <Typography variant="h6" 
                        color="inherit">
                          Home
                        </Typography>

                      </Box>
                      <Box mx={1}   
                      style={{ cursor: 'pointer' }}>
                        <Typography variant="h6" 
                        color="inherit">
                          Postagens
                        </Typography>

                      </Box>

                      <Box mx={1} style={{ cursor: 'pointer' }}>
                        <Typography variant="h6" 
                        color="inherit">
                          Temas
                        </Typography>
                      </Box>

                      <Box mx={1} style={{ cursor: 'pointer' }}>
                        <Typography variant="h6" 
                        color="inherit">
                          Cadastrar tema
                        </Typography>
                      </Box>

                      <Box mx={1}>
                          <Link to='./login'>
                              <Typography variant="h6" color="inherit">
                                logout
                              </Typography>
                          </Link>
                        </Box>
                    </Box>
                  </Box>
                </Toolbar>
              </AppBar>
            </>
          );
}

export default Navbar;