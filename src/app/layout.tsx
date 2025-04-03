import type { Metadata } from "next";
import { Poppins, Montserrat, Playfair_Display, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Define main body font
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

// Define heading font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat"
});

// Define accent display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-playfair"
});

// Define monospace font for code sections
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto-mono"
});

export const metadata: Metadata = {
  title: "Manglesh Nimbalkar | Portfolio",
  description: "Computer Engineer & AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${playfair.variable} ${robotoMono.variable}`}>
      <body className="font-sans bg-black">
        {children}
      </body>
    </html>
  );
}
