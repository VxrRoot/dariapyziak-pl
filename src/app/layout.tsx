"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale || "en"}>
      <head>
        <link rel="icon" href="/Favicon.ico" sizes="any" />
      </head>
      <body className={`${epilogue.className}`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
