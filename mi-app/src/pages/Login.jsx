import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = "Correo electrónico inválido.";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:8000/api/usuarios/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guarda el token si está presente
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Redirige siempre si el login fue exitoso
        navigate("/");
      } else {
        const newErrors = {};

        if (data?.detail) {
          newErrors.general = data.detail;
        } else if (typeof data === "object") {
          for (const key in data) {
            newErrors[key] = Array.isArray(data[key]) ? data[key][0] : data[key];
          }
        } else {
          newErrors.general = "Error desconocido al iniciar sesión.";
        }

        setErrors(newErrors);
      }
    } catch (error) {
      setErrors({ general: "Error de red: " + error.message });
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper elevation={6} sx={{ padding: 4, width: 350, textAlign: "center" }}>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Typography variant="h5" sx={{ mb: 2 }}>
      Iniciar Sesión
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography variant="body2" sx={{ mr: 1 }}>
        ¿No tienes cuenta?
      </Typography>
      <Link to="/registrar" style={{ fontSize: "0.875rem" }}>
        Regístrate aquí
      </Link>
    </Box>
  </Box>

  {errors.general && (
    <Typography color="error" sx={{ mb: 2 }}>
      {errors.general}
    </Typography>
  )}

  <Box component="form" onSubmit={handleSubmit}>
    <TextField
      label="Correo electrónico"
      fullWidth
      margin="normal"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={Boolean(errors.email)}
      helperText={errors.email}
      required
    />
    <TextField
      label="Contraseña"
      type="password"
      fullWidth
      margin="normal"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      error={Boolean(errors.password)}
      helperText={errors.password}
      required
    />
    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
      Entrar
    </Button>
  </Box>
</Paper>

    </Box>
  );
};

export default Login;
