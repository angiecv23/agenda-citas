"use client";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Link from "next/link";

export default function Citas() {
  const [citas, setCitas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) setCitas(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const agregarID = (cita) => ({
    id: Date.now(),
    ...cita,
  });

  const eliminarCita = (id) => {
    setCitas(citas.filter((c) => c.id !== id));
  };

  const editarCita = (id) => {
    const cita = citas.find((c) => c.id === id);

    const titulo = prompt("Nuevo título:", cita.titulo);
    const fecha = prompt("Nueva fecha:", cita.fecha);
    const hora = prompt("Nueva hora:", cita.hora);

    if (!titulo || !fecha || !hora) return;

    const nuevas = citas.map((c) =>
      c.id === id ? { ...c, titulo, fecha, hora } : c
    );

    setCitas(nuevas);
  };

  const citasFiltradas = citas
    .filter((c) =>
      (c.titulo || "").toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((c) => (filtro === "todas" ? true : c.categoria === filtro));

  return (
    <div className="container">
      <h1>Historial de Citas 📅</h1>

      <Link href="/nueva-cita" className="btn">
        + Nueva Cita
      </Link>

      <input
        type="text"
        placeholder="Buscar cita..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="filtros">
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="trabajo">Trabajo</option>
          <option value="personal">Personal</option>
          <option value="estudio">Estudio</option>
        </select>
      </div>

      {citasFiltradas.map((cita) => (
        <div key={cita.id} className={`card ${cita.categoria}`}>
          <div>
            <strong>{cita.titulo}</strong>
            <p>📅 {cita.fecha}</p>
            <p>⏰ {cita.hora}</p>
            <p>🏷️ {cita.categoria}</p>
            <p>{cita.descripcion}</p>
          </div>

          <div className="actions">
            <Button onClick={() => editarCita(cita.id)}>Editar</Button>
            <Button onClick={() => eliminarCita(cita.id)}>Eliminar</Button>
          </div>
        </div>
      ))}
    </div>
  );
}