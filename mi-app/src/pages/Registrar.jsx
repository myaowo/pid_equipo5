import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Correo electrónico inválido.";
    }

    if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:8000/api/usuarios/registro/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          confirm_password: confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirigir a la página principal después del registro
        navigate("/");
      } else {
        setErrors({ general: data.detail || "Error al registrar." });
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
            Registrarse
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              ¿Ya tienes cuenta?
            </Typography>
            <Link to="/login" style={{ fontSize: "0.875rem" }}>
              Iniciar sesión
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
            label="Nombre completo"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
            required
          />
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
          <TextField
            label="Confirmar contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Registrarse
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Registrar;
