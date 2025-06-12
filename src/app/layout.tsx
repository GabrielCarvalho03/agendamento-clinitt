import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clinitt.ai | Orçamentos Odontológicos Inteligentes ",
  description:
    "Crie orçamentos personalizados, persuasivos e profissionais em menos de 1 minuto. Aumente a aceitação e destaque sua clínica com a Clinitt.ai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster closeButton position="top-right" />
        {children}
      </body>
    </html>
  );
}
