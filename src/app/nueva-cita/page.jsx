"use client";
import { useState } from "react";
import AppointmentForm from "../../components/AppointmentForm";

export default function NuevaCita() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    const data = localStorage.getItem("citas");
    const citasActuales = data ? JSON.parse(data) : [];

    const nuevas = [...citasActuales, cita];
    localStorage.setItem("citas", JSON.stringify(nuevas));

    alert("Cita agregada ✅");
  };

  return (
    <div className="container">
      <h1>Nueva Cita ➕</h1>
      <AppointmentForm agregarCita={agregarCita} />
    </div>
  );
}