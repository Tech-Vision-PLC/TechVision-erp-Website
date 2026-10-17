import React from "react";
import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "TechVision — Smart Digital Solutions for Modern Organizations",
  description:
    "TechVision builds cloud-based LMS, Education ERP, ERP, and HR Management systems that help schools, universities, and businesses run smarter. Local Ethiopian support.",
  generator: "v0.app",
  icons: {
  icon: [
    {
      url: "/brand/techvision-light.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/brand/techvision-dark.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        className={`${archivo.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}