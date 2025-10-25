import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Leonardo Silva | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack com 14 anos de experiência em React, Python, Java, Node.js e análise de dados. Especialista em criar soluções escaláveis e eficientes.",
  keywords: ["Desenvolvedor Full Stack", "React", "Python", "Java", "Node.js", "MySQL", "AWS", "Power BI"],
  authors: [{ name: "Leonardo Silva" }],
  openGraph: {
    title: "Leonardo Silva | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack com 14 anos de experiência",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
