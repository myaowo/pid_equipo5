import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 600,
        height:300

     }}>
      
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Tu bienestar empieza hoy
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
        Regálate una pausa consciente. Agenda hoy tu sesión de bienestar y da el primer paso hacia una vida más plena.
        Con terapias personalizadas y atención humana, te acompañamos a prevenir, sanar y vivir mejor. Reserva tu espacio ahora.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agenda tu cita</Button>
        
      </CardActions>
    </Card>
  );
}
