"use client";
import { useRouter } from "next/navigation";
import AppointmentForm from "../../components/AppointmentForm";

export default function NuevaCita() {
  const router = useRouter();

  const agregarCita = (cita) => {
    const data = localStorage.getItem("citas");
    const citasActuales = data ? JSON.parse(data) : [];

    const nueva = {
      id: Date.now(),
      ...cita,
    };

    const nuevas = [...citasActuales, nueva];
    localStorage.setItem("citas", JSON.stringify(nuevas));

    router.push("/citas");
  };

  return (
    <div className="container">
      <h1>Nueva Cita ➕</h1>
      <AppointmentForm agregarCita={agregarCita} />
    </div>
  );
}