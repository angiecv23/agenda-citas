import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mi App</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/citas">Registr Citas</Link>
          </li>
          <li>
            <Link href="/perfil">Historial de Citas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}