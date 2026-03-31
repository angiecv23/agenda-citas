"use client";
import { useState } from "react";
import Button from "./Button";

export default function AppointmentForm({ agregarCita }) {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [categoria, setCategoria] = useState("personal");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !fecha || !hora) {
      alert("Completa los campos obligatorios");
      return;
    }

    agregarCita({ titulo, fecha, hora, categoria, descripcion });

    setTitulo("");
    setFecha("");
    setHora("");
    setCategoria("personal");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="personal">Personal</option>
        <option value="trabajo">Trabajo</option>
        <option value="estudio">Estudio</option>
      </select>

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <Button>Agregar</Button>
    </form>
  );
}