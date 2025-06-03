import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CardBlog from "./CardBlog";

const Blogs = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    // Cargar solo los primeros 3 artículos para el preview del blog
    fetch("http://localhost:8000/api/articulos/")
      .then((res) => res.json())
      .then((data) => {
        setArticulos(data.slice(0, 3)); // Mostrar los primeros 3 artículos
      })
      .catch((err) => console.error("Error cargando artículos:", err));
  }, []);

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography
        variant="h3"
        sx={{ mb: 8, textAlign: "center", fontWeight: "bold" }}
      >
        Blog
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {articulos.map((articulo) => (
          <CardBlog key={articulo.id} article={articulo} />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Button
          component={Link}
          to="/articulos"
          variant="contained"
          color="primary"
        >
          Ver más
        </Button>
      </Box>
    </Box>
  );
};

export default Blogs;
