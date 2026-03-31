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
            <Link href="/citas">Citas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}