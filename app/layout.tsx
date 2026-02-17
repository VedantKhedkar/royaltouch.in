import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}