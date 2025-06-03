// src/pages/ArticuloDetalle.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";

const DetalleArticulo = () => {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/articulos/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Artículo no encontrado");
        return res.json();
      })
      .then((data) => {
        setArticulo(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <CircularProgress />;
  if (!articulo) return <Typography>Artículo no encontrado.</Typography>;

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h3" gutterBottom>{articulo.titulo}</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {new Date(articulo.created_at).toLocaleDateString()} | {articulo.categoria}
      </Typography>
      {articulo.imagen && (
        <img
          src={`http://localhost:8000${articulo.imagen}`}
          alt={articulo.titulo}
          style={{ width: "100%", maxWidth: "800px", marginBottom: "1rem" }}
        />
      )}
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {articulo.contenido}
      </Typography>
    </Box>
  );
};

export default DetalleArticulo;
