"use client";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendario() {
  const [citas, setCitas] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) setCitas(JSON.parse(data));
  }, []);

  const citasDelDia = citas.filter((cita) => {
    const fechaCita = new Date(cita.fecha);
    return fechaCita.toDateString() === fechaSeleccionada.toDateString();
  });

  return (
    <div className="container">
      <h1>Calendario 📅</h1>

      <Calendar
        onChange={setFechaSeleccionada}
        value={fechaSeleccionada}
      />

      <h2>Citas del día</h2>

      {citasDelDia.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citasDelDia.map((cita) => (
          <div key={cita.id} className="card">
            <strong>{cita.titulo}</strong>
            <p>⏰ {cita.hora}</p>
            <p>🏷️ {cita.categoria}</p>
          </div>
        ))
      )}
    </div>
  );
}