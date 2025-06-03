import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Servicios = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/api/servicios/')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener servicios');
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((err) => console.error('Error cargando servicios:', err));
  }, []);

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Nuestros Servicios
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
        Te acompañamos en cada etapa de tu bienestar con un enfoque integral que cuida tu cuerpo, mente y emociones.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((servicio) => (
          <Grid item xs={12} sm={6} md={4} key={servicio.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:8000${servicio.imagen}`}
                alt={servicio.nombre}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {servicio.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicio.descripcion.slice(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Botón general "Ver más servicios" */}
      <Box textAlign="center" mt={6}>
        <Button variant="outlined" color="primary" onClick={() => navigate('/servicios')}>
          Ver más servicios
        </Button>
      </Box>
    </Box>
  );
};

export default Servicios;
