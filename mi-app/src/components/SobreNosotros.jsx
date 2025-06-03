import React from "react";
import { Box, Typography } from "@mui/material";

const SobreNosotros = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        Sobre Nosotros
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Textos */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Somos una clínica de bienestar integral dedicada a acompañar a las personas
            en su proceso de sanación física, emocional y espiritual, integrando técnicas
            de la medicina tradicional y terapias complementarias.
          </Typography>
          <Typography variant="body1">
            Nuestro equipo está formado por profesionales de la salud, terapeutas holísticos
            y especialistas en desarrollo personal, comprometidos con brindar una atención
            cálida, personalizada y consciente.
          </Typography>
        </Box>

        {/* Imagen */}
        <Box sx={{ flex: 1 }}>
          <img
            src="/images/equipo.png"
            alt="Nuestro equipo de la clínica"
            style={{ width: "100%", height: "auto", borderRadius: 1 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SobreNosotros;
