"use client";

export default function Home() {
  return (
    <div>
      <h1>Dashboard 📊</h1>

      <div className="dashboard">
        <div className="card-dashboard">
          <h3>Citas</h3>
          <p>Ver y gestionar citas</p>
        </div>

        <div className="card-dashboard">
          <h3>Clientes</h3>
          <p>Gestión de clientes</p>
        </div>

        <div className="card-dashboard">
          <h3>Reportes</h3>
          <p>Estadísticas del sistema</p>
        </div>
      </div>
    </div>
  );
}