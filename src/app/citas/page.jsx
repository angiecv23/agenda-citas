"use client";
import { useState, useEffect } from "react";
import AppointmentForm from "../../component/AppointmentForm";

export default function Citas() {
  const [citas, setCitas] = useState([]);

  // cargar datos
  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) {
      setCitas(JSON.parse(data));
    }
  }, []);

  // guardar datos
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // agregar cita
  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // eliminar cita
  const eliminarCita = (index) => {
    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
  };

  return (
    <div className="container">
      <h1>Agenda de Citas 📅</h1>

      <AppointmentForm agregarCita={agregarCita} />

      {citas.map((cita, index) => (
        <div key={index} className="card">
          <div>
            <strong>{cita.nombre}</strong> - {cita.fecha}
          </div>
          <button onClick={() => eliminarCita(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}