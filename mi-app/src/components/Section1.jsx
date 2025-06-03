import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Imagen */}
        <Box sx={{ flex: 1 }}>
          <img
            src="/images/amigos.png"
            alt="Nuestro equipo de la clínica"
            style={{ width: "100%", height: "auto", borderRadius: 1 }}
          />
        </Box>

        {/* Textos + botón */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            En medio del ritmo acelerado de la vida diaria, es fácil olvidarnos
            de lo más importante: nuestro bienestar. El cuerpo habla, la mente
            se agota, el alma susurra lo que necesita… y muchas veces no nos
            detenemos a escuchar. Hoy te invitamos a hacer algo diferente:
            regalarte un momento solo para ti.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            En nuestra clínica de bienestar integral, creemos en el poder de
            las pausas conscientes, de los espacios seguros y del cuidado
            profundo. Aquí no solo se trata de aliviar síntomas, sino de
            acompañarte a mirar hacia adentro, sanar desde la raíz y cultivar
            una vida más plena, tranquila y significativa.
          </Typography>

          {/* Botón centrado */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button  component={Link}
  to="/reserva" variant="contained" color="primary">
              Reserva ahora
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
