import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upgrade Self",
  description: "Upgrade Self",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="grid" style={{ gridTemplateColumns: "15vw auto" }}>
          <Sidebar />
          <div className="p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
