"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("citas");
    if (data) {
      setCitas(JSON.parse(data));
    }
  }, []);

  const totalCitas = citas.length;
  const ultimaCita = citas[citas.length - 1];

  return (
    <div>
      <h1>Dashboard 📊</h1>

      <div className="dashboard">

        /* Card clickeable */
        <Link href="/citas" className="card-dashboard">
          <h3>Total de Citas</h3>
          <p>{totalCitas}</p>
        </Link>

        /* Card info */
        <div className="card-dashboard">
          <h3>Última Cita</h3>
          {ultimaCita ? (
            <p>
              {ultimaCita.nombre} - {ultimaCita.fecha}
            </p>
          ) : (
            <p>No hay citas</p>
          )}
        </div>

      </div>
    </div>
  );
}