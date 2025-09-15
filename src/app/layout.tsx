import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Watchlist App",
  description: "Crea listas, simula eventos y enriquece con IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
