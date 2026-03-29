"use client";
import { useState } from "react";

export default function AppointmentForm({ agregarCita }) {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !fecha) {
      alert("Completa los campos");
      return;
    }

    agregarCita({ nombre, fecha });

    setNombre("");
    setFecha("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button type="submit">Agregar cita</button>
    </form>
  );
}