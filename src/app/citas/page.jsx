"use client";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import AppointmentForm from "../../components/AppointmentForm";

export default function Citas() {
  const [citas, setCitas] = useState([]);
  const [busqueda, setBusqueda] = useState(""); 

  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) {
      setCitas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
  };

  const editarCita = (index) => {
    const nuevaTitulo = prompt("Nuevo título:", citas[index].titulo);
    const nuevaFecha = prompt("Nueva fecha:", citas[index].fecha);
    const nuevaHora = prompt("Nueva hora:", citas[index].hora);

    if (!nuevaTitulo || !nuevaFecha || !nuevaHora) return;

    const nuevasCitas = [...citas];
    nuevasCitas[index] = {
      ...citas[index],
      titulo: nuevaTitulo,
      fecha: nuevaFecha,
      hora: nuevaHora,
    };

    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <h1>Agenda de Personal 📅</h1>

      <input
        type="text"
        placeholder="Buscar cita..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      
      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("trabajo")}>Trabajo</button>
        <button onClick={() => setFiltro("personal")}>Personal</button>
        <button onClick={() => setFiltro("estudio")}>Estudio</button>
      </div>

      <AppointmentForm agregarCita={agregarCita} />

      {citas.filter((cita) =>
          cita.titulo.toLowerCase().includes(busqueda.toLowerCase())
        )
        .map((cita, index) => (
        <div key={index} className="card">
          <div>
            <strong>{cita.titulo}</strong>
            <p>📅 {cita.fecha}</p>
            <p>⏰ {cita.hora}</p>
            <p>🏷️ {cita.categoria}</p>
            <p>{cita.descripcion}</p>
          </div>

          <div className="actions">
            <Button onClick={() => editarCita(index)}>Editar</Button>
            <Button onClick={() => eliminarCita(index)}>Eliminar</Button>
          </div>
        </div>
      ))}
    </div>
  );
}