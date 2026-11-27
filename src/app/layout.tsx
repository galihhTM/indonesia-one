import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// 1. Daftarkan semua ketebalan MozaicGEO
const mozaicgeo = localFont({
  src: [
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Mozaicgeo/MozaicGEO-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mozaicgeo",
  display: "swap",
});

// 2. Load Font Google (Cormorant Garamond)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indonesia One | Luxury Residences",
  description: "Premium, fully integrated destination...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mozaicgeo.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}