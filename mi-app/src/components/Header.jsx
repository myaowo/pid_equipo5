import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../index.css';

const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        display: "flex",
        backgroundColor: "#00B4D8"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo o nombre - redirige a la página principal */}
        <Typography 
          variant="h6" 
          sx={{ 
            color: "white",
            fontWeight: "bold" 
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Clínica Holística
          </Link>
        </Typography>

        {/* Enlaces de navegación */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button 
              sx={{ 
                color: "white", 
                textTransform: "none", 
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:active": { boxShadow: "none" }
              }}
            >
              Inicio
            </Button>
          </Link>

          <Link to="/servicios" style={{ color: "white", textDecoration: "none" }}>
            <Button 
              sx={{ 
                color: "white", 
                textTransform: "none", 
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:active": { boxShadow: "none" }
              }}
            >
              Servicios
            </Button>
          </Link>

          <Link to="/articulos" style={{ color: "white", textDecoration: "none" }}>
            <Button 
              sx={{ 
                color: "white", 
                textTransform: "none", 
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:active": { boxShadow: "none" }
              }}
            >
              Blog
            </Button>
          </Link>

          {/* Botón destacado */}
          <Button 
            component={Link}
            to="/login" 
            variant="contained" 
            sx={{ 
              backgroundColor: "white", 
              color: "black", 
              fontWeight: "bold", 
              "&:hover": { backgroundColor: "#f1f1f1" },
              "&:focus": { outline: "none", boxShadow: "none" },
              "&:active": { boxShadow: "none" }
            }}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
