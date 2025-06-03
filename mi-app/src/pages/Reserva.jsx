import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const Reserva = () => {
  const [servicio, setServicio] = useState("");  // Estado para el servicio seleccionado
  const [servicios, setServicios] = useState([]);  // Estado para la lista de servicios
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentarios, setComentarios] = useState("");

  const horasDisponibles = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  // Cargar servicios desde la API
  useEffect(() => {
    fetch("http://localhost:8000/api/servicios/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Servicios cargados:", data);  // Verifica los servicios cargados
        setServicios(data);
      })
      .catch((error) => {
        console.error("Error al cargar los servicios:", error);
      });
  }, []);

  // Manejo del formulario y la reserva
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      full_name: nombre,
      email,
      service: servicio,  // Aquí enviamos el ID del servicio seleccionado
      appointment_date: fecha,
      appointment_time: hora,
      phone: telefono,
      comments: comentarios,
    };

    // Enviar reserva a la API
    fetch("http://localhost:8000/api/reservas/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Reserva enviada con éxito");
          // Limpiar formulario
          setServicio("");
          setFecha("");
          setHora("");
          setNombre("");
          setEmail("");
          setTelefono("");
          setComentarios("");
        } else {
          alert("Error al enviar la reserva");
        }
      })
      .catch(() => alert("Error de conexión con el servidor"));
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom align="center">
          Reserva tu cita
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="servicio-label">Servicio</InputLabel>
            <Select
              labelId="servicio-label"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}  // Cuando seleccionas un servicio
            >
              {servicios.length === 0 ? (
                <MenuItem disabled>No hay servicios disponibles</MenuItem>
              ) : (
                servicios.map((s) => (
                  <MenuItem key={s.id} value={s.id}>
                    {s.nombre} {/* Asegúrate de que 'nombre' es la propiedad correcta */}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Fecha"
                type="date"
                fullWidth
                margin="normal"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel id="hora-label">Hora</InputLabel>
                <Select
                  labelId="hora-label"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                >
                  {horasDisponibles.map((horaItem) => (
                    <MenuItem key={horaItem} value={horaItem}>
                      {horaItem}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <TextField
            label="Nombre completo"
            fullWidth
            margin="normal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <TextField
            label="Correo electrónico"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Teléfono"
            type="tel"
            fullWidth
            margin="normal"
            value={telefono}
            onChange={(e) => {
              const input = e.target.value;
              if (/^\d*$/.test(input)) {
                setTelefono(input);
              }
            }}
            inputProps={{ maxLength: 10 }}
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Confirmar Reserva
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Reserva;
