import "../app/styles/globals.scss";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Agenda App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Contenido */}
          <main className="content">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}