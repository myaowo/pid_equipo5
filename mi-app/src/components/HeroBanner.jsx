import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '500px', md: '90vh' },
        width: '100vw',
        backgroundImage: 'url(/images/heroBanner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Box zIndex={2} px={2}>
        <Typography
          variant="h3"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            fontWeight: 'bold',
            textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
          }}
        >
          Tu bienestar comienza aquí: equilibrio para el cuerpo, paz para la mente, y energía para el alma.
        </Typography>
      </Box>

      {/* Degradado blanco en la parte inferior */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(to top, white, transparent)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default HeroBanner;
