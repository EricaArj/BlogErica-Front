import React from "react";
import "./Navbar.css";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Home from "../../paginas/home/Home";
import Login from "../../paginas/login/Login";

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
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          Blog Pessoal
        </Typography>

        <Box display="flex" justifyContent="start">
          <Link to="/home">
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
          </Link>
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Link to="/postagens">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Link>
          </Box>
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Link to="/temas">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Link>
          </Box>
          <Box mx={1} style={{ cursor: "pointer" }}>
            <Link to="/cadastrarTema">
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Link>
          </Box>
          <Box mx={1}>
            <Link to="/login">
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Link>
          </Box>
        </Box>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to="/login">
          <Button variant="outlined" size="small">
            Login
          </Button>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

export default Navbar;
