"use client";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import AppointmentForm from "../../components/AppointmentForm";

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

  const editarCita = (index) => {
    const nuevaNombre = prompt("Nuevo nombre:", citas[index].nombre);
    const nuevaFecha = prompt("Nueva fecha:", citas[index].fecha);

    if (!nuevaNombre || !nuevaFecha) return;

    const nuevasCitas = [...citas];
    nuevasCitas[index] = {
      nombre: nuevaNombre,
      fecha: nuevaFecha,
    };

    setCitas(nuevasCitas);
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

          <div className="actions">
            <Button onClick={() => editarCita(index)}>Editar</Button>
            <Button onClick={() => eliminarCita(index)}>Eliminar</Button>
          </div>
        </div>
      ))}
    </div>
  );
}