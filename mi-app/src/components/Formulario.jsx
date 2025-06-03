import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeEnviado(false);
    setErrorMensaje("");

    try {
      const response = await fetch("http://localhost:8000/api/contacto/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          mensaje: comentarios,
        }),
      });

      const data = await response.json();
      console.log("Respuesta del backend:", data);
if (response.ok) {
  setNombre("");
  setEmail("");
  setComentarios("");
  setMensajeEnviado(true);
  setTimeout(() => setMensajeEnviado(false), 5000);
} else {
  // Junta todos los errores en una sola cadena
  const errores = Object.values(data)
    .flat()
    .join(" ");
  setErrorMensaje(errores || "Error al enviar el mensaje.");
}

    } catch (error) {
      console.error("Error al enviar:", error);
      setErrorMensaje("Error en la conexión con el servidor.");
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        width: "780px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: "10px",
        }}
      >
        <Typography variant="h3" sx={{ mb: "8px" }}>
          Contáctanos
        </Typography>
        <Typography variant="body2">
          Completa el formulario y te responderemos a la mayor brevedad posible.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Nombre Completo"
          fullWidth
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <TextField
          label="Correo electrónico"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Comentarios"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Enviar Mensaje
        </Button>
      </Box>

      {mensajeEnviado && (
        <Alert severity="success" sx={{ mt: 2 }}>
          ¡Mensaje enviado con éxito!
        </Alert>
      )}

      {errorMensaje && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMensaje}
        </Alert>
      )}
    </Box>
  );
};

export default Formulario;
