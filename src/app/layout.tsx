import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deuclic App",
  description: "Trouver votre future Appartement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
