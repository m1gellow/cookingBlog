import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Roboto } from "next/font/google";
import Navbar from "./components/ui/Navbar";

const playfairdisplay = Playfair_Display({
  variable: "--font-playfairdisplay",
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title:{
    default: "Кулинарый Мир",
    template: "%s | Кулинарный Мир"
  },
  description: "Блог о Кулинарии",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairdisplay.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        <div className="">{children}</div>
      
      </body>
    </html>
  );
}
