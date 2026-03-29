"use client";
import { useState, useEffect } from "react";
import AppointmentForm from "../../component/AppointmentForm";

export default function Citas() {
  const [citas, setCitas] = useState([]);

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

  return (
    <div>
      <h1>Agenda de Citas 😎</h1>

      <AppointmentForm agregarCita={agregarCita} />

      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            {cita.nombre} - {cita.fecha}
            <button onClick={() => eliminarCita(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}