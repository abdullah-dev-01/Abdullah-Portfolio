import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Muhammad Abdullah - MERN Stack Developer",
  description: "Portfolio of Muhammad Abdullah, a passionate MERN Stack Developer from Islamabad, Pakistan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="bg-gray-900 text-gray-100 overflow-x-hidden">{children}</body>
    </html>
  )
}
