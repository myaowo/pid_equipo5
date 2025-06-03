import React from 'react';
import HeroBanner from "../components/HeroBanner";
import { Box, Typography, Button } from '@mui/material';
import Section1 from "../components/Section1";
import Card from "../components/Card";
import Blogs from "../components/Blogs";
import Formulario from "../components/Formulario";
Servicios
import SobreNosotros from "../components/SobreNosotros";
import Servicios from '../components/Servicios';
const Inicio = () => {
  return (
    <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap:4
  }}
>
  <HeroBanner />
  <Section1 />
  <Servicios></Servicios>
  <Blogs />
  <Formulario />
  <SobreNosotros></SobreNosotros>
</Box>

  )
}

export default Inicio
