"use client";
import { useState, useEffect } from "react";
import AppointmentForm from "../../component/AppointmentForm";

export default function Citas() {
  const [citas, setCitas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  
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
    if (editIndex !== null) {
      const nuevas = [...citas];
      nuevas[editIndex] = cita;
      setCitas(nuevas);
      setEditIndex(null);
    } else {
      setCitas([...citas, cita]);
    }
  };

  // eliminar cita
  const eliminarCita = (index) => {
    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
  };

  // editar cita
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
            <button onClick={() => editarCita(index)}>Editar</button>
            <button onClick={() => eliminarCita(index)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}