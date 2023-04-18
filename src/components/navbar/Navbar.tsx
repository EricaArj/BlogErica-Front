import React from "react";
import "./Navbar.css";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Home from '../../paginas/home/Home';
import Login from '../../paginas/login/Login';


interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

function Navbar() {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
    
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align='left'
          noWrap
          sx={{ flex: 1 }}
        >
          Blog Pessoal
        </Typography>
        <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        Home
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        Pastagens
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      Tema
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        Sobre
      </Toolbar>

      <Link to='./cadastroUsuario'>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        Cadastrar
      </Toolbar>
      </Link>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to='/login'>
        <Button variant="outlined" size="small">
          Login
        </Button>
        </Link>
      </Toolbar>
      
    </React.Fragment>
    
  );
}

export default Navbar;
