"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "../components/Card";

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
      <h1>Panel de control 📊</h1>

      <div className="dashboard">

        <Link href="/citas">
          <Card>
            <h3>Total de Citas</h3>
            <p>{totalCitas}</p>
          </Card>
        </Link>

        <Card>
          <h3>Última Cita</h3>
          {ultimaCita ? (
            <p>
              {ultimaCita.nombre} - {ultimaCita.fecha}
            </p>
          ) : (
            <p>No hay citas</p>
          )}
        </Card>

      </div>
    </div>
  );
}