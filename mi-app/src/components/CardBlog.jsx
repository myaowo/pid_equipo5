// CardBlog.jsx
import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const CardBlog = ({ article }) => {
  const BASE_URL = "http://127.0.0.1:8000"; // cambia esto si usas un backend en producción
  const imagenUrl = article.imagen ? `${BASE_URL}/media/${article.imagen}` : null;

  return (
    <Card
      component={Link}
      to={`/articulos/${article.id}`}
      sx={{
        textDecoration: "none",
        width: 300,
        transition: "transform 0.2s ease",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      {imagenUrl && (
        <CardMedia
          component="img"
          image={imagenUrl}
          alt={article.titulo}
          sx={{
            width: "250px",
            height: "270px",
            objectFit: "cover", // Esto recorta la imagen para que se vea uniforme
          }}
        />
      )}

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {article.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.resumen}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBlog;
