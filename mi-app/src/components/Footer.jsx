import React from "react";
import '../index.css'
import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--color-p1)",
        color: "white",
        px: 3,
        py: 3,
        mt: 2,
      }}
    >
      <Grid
  container
  spacing={4}
  justifyContent="space-between"
  alignItems="flex-start"
>
  {/* Nombre / logo */}
  <Grid item xs={12} md={4}>
    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
      Clínica Holística
    </Typography>
    <Typography variant="body2">
      Salud física, emocional y espiritual en armonía.
    </Typography>
  </Grid>

  {/* Navegación */}
  <Grid item xs={12} md={4}>
    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
      Enlaces rápidos
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // Esto reparte los links
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Link href="/" color="inherit" underline="hover">
        Inicio
      </Link>
      <Link href="/servicios" color="inherit" underline="hover">
        Servicios
      </Link>
      <Link href="/nosotros" color="inherit" underline="hover">
        Nosotros
      </Link>
      <Link href="/contacto" color="inherit" underline="hover">
        Contacto
      </Link>
    </Box>
  </Grid>

  {/* Contacto */}
  <Grid item xs={12} md={4}>
    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
      Contáctanos
    </Typography>
    <Typography variant="body2">Tel: (123) 456-7890</Typography>
    <Typography variant="body2">
      Email: contacto@clinicaholistica.com
    </Typography>
    <Typography variant="body2">
      Dirección: Calle Bienestar 123, CDMX
    </Typography>
  </Grid>
</Grid>


      {/* Derechos reservados */}
      <Box sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #ffffff33", pt: 2 }}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Clínica Holística. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
