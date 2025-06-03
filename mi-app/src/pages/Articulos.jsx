import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardBlog from "../components/CardBlog";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [categoria, setCategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    // Hacer solicitud a la API de Django para obtener los artículos
    fetch("http://localhost:8000/api/articulos/") // Asegúrate de que esta URL coincida con tu configuración de backend
      .then((res) => res.json())
      .then((data) => {
        setArticulos(data);
        setResultado(data);
      })
      .catch((err) => console.error("Error cargando artículos:", err));
  }, []);

  const categoriasUnicas = [
    "Todas",
    ...new Set(articulos.map((item) => item.categoria)),
  ];

  const filtrarArticulos = () => {
    const filtrados = articulos.filter((articulo) => {
      const coincideCategoria =
        categoria === "Todas" || articulo.categoria === categoria;
      const coincideBusqueda = articulo.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
    setResultado(filtrados);
  };

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography
        variant="h3"
        sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
      >
        Artículos
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        Explora nuestros artículos sobre bienestar, salud integral y desarrollo personal. Encuentra inspiración, consejos útiles y reflexiones profundas que te acompañarán en tu camino hacia una vida más plena y consciente.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <TextField
          select
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
        >
          {categoriasUnicas.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          size="small"
          sx={{ minWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" onClick={filtrarArticulos}>
          Buscar
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {resultado.map((articulo, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CardBlog article={articulo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articulos;
