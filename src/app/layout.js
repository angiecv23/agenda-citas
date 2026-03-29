import "../app/styles/globals.scss";
import Link from "next/link";

export const metadata = {
  title: "Agenda App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          
          {/* Sidebar */}
          <aside className="sidebar">
            <h2>Mi App de Citas</h2>
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

          {/* Contenido */}
          <main className="content">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}