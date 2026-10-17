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



export const metadata = {
  title: "TechVision Ethiopia Addis Abeba | ERP, HR & Software Development",
  description:
    "TechVision provides cloud-based ERP software, HR management systems, and custom software development for businesses, schools, and universities in Ethiopia. Get reliable technology solutions and local support.",
  keywords: [
    "ERP software Ethiopia Addis Abeba",
    "HR management system Ethiopia Addis Abeba",
    "ERP implementation Ethiopia Addis Abeba",
    "custom software development Ethiopia Addis Abeba",
    "website development Ethiopia Addis Abeba",
    "business management software Ethiopia Addis Abeba",
    "school management software Ethiopia Addis Abeba",
    "TechVision Ethiopia Addis Abeba",
  ],
  metadataBase: new URL("https://techvision.et"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechVision Ethiopia Addis Abeba | ERP, HR & Software Development",
    description:
      "Modern ERP, HR management, and custom software solutions for Ethiopian businesses, schools, and universities.",
    url: "https://techvision.et",
    siteName: "TechVision",
    locale: "en_ET",
    type: "website",
  },
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
