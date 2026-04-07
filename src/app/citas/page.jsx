"use client";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import AppointmentForm from "../../components/AppointmentForm";

export default function Citas() {
  const [citas, setCitas] = useState([]);
  const [busqueda, setBusqueda] = useState(""); 
  const [filtro, setFiltro] = useState("todas");
  
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
      <h1>Historial de Citas 📅</h1>

      <input
        type="text"
        placeholder="Buscar cita..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="filtros">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="trabajo">Trabajo</option>
          <option value="personal">Personal</option>
          <option value="estudio">Estudio</option>
        </select>
      </div>

      {citas.filter((cita) =>
          cita.titulo.toLowerCase().includes(busqueda.toLowerCase())
        ).filter((cita) =>
          filtro === "todas" ? true : cita.categoria === filtro
        )
        .map((cita, index) => (
        <div key={index} className={`card ${cita.categoria}`}>
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