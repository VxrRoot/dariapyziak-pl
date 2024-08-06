import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daria Pyziak - UX/UI Designer & Brand Designer",
  description:
    "Daria Pyziak UX/UI Designer & Brand Designer, strony internetowe, sklepy internetowe, aplikacje, branding, brand managment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Favicon.ico" sizes="any" />
      </head>
      <body className={`${epilogue.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
