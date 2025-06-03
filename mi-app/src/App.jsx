import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Inicio from "./pages/Inicio";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import Reserva from "./pages/Reserva";
import Articulos from "./pages/Articulos";
import ServiciosPag from "./pages/ServiciosPag";
import DetalleArticulo from "./pages/DetalleArticulo";


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con header/footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio/>} />
          <Route path="/reserva" element={<Reserva/>}
           />
           <Route path="/servicios" element={<ServiciosPag/>}
           />
           <Route path="/articulos" element={<Articulos/>}/>
          {/* Otras rutas normales */}
          <Route path="/articulos/:id" element={<DetalleArticulo />} />
        </Route>

        {/* Rutas SIN header/footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
