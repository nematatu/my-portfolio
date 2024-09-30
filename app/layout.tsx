import type { Metadata } from "next";
import "./globals.css";
import {fredoka} from '@/app/ui/fonts'



export const metadata: Metadata = {
  title: "amatatu",
  description: "amatatu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
