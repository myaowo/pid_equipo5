import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiciosPag = () => {
  const [services, setServices] = useState([]); // Para guardar los servicios
  const navigate = useNavigate();

  useEffect(() => {
    // Consumimos la API del backend para obtener los servicios
    fetch('http://localhost:8000/api/servicios/') // URL de tu API
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los servicios');
        return res.json();
      })
      .then((data) => setServices(data)) // Guardamos los datos de los servicios en el estado
      .catch((err) => console.error('Error cargando servicios:', err));
  }, []);

  // Función para desplazarse a la sección del servicio
  const handleServiceClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, px: { xs: 2, md: 8 }, py: 6 }}>
      {/* Menú lateral estilizado */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'sticky',
          top: 0,
          width: '250px',
          mr: 4,
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: 'primary.main' }}>
          Servicios
        </Typography>
        <Stack spacing={2}>
          {/* Generamos el menú lateral con los nombres de los servicios */}
          {services.map((servicio) => (
            <Typography
              key={servicio.id}
              onClick={() => handleServiceClick(servicio.id)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline',
                },
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              {servicio.nombre}
            </Typography>
          ))}
        </Stack>
      </Box>

      {/* Contenido de los servicios */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Descubre Nuestros Servicios
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          Conoce cómo podemos acompañarte en tu camino hacia el bienestar físico, mental y emocional.
        </Typography>

        {/* Mapeo de los servicios */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((servicio) => (
            <Grid item xs={12} sm={6} md={4} key={servicio.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column', // Mantener la orientación vertical
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)', // Efecto de hover
                    boxShadow: 6,
                  },
                  width: '100%', // Ancho completo dentro de su contenedor
                  maxWidth: '350px', // Aseguramos que las tarjetas no sean demasiado grandes
                  height: 'auto',
                }}
                id={servicio.id} // Id para poder desplazarse a esa sección
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={`http://localhost:8000${servicio.imagen}`} // Concatenamos la URL base para que la imagen sea accesible
                  alt={servicio.nombre}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {servicio.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {servicio.descripcion.slice(0, 120)}...
                  </Typography>
                  {/* Descripción más extensa, sólo se muestra si el servicio es seleccionado */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Botón para ver más servicios (opcional) */}
        <Box textAlign="center" mt={6}>
          <Typography
            variant="body1"
            color="primary"
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => navigate('/servicios')}
          >
            Ver más servicios
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiciosPag;
