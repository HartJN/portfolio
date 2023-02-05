'use client'
import Navbar from '@/components/Navbar'
import { ParticlesEffect } from '@/components/Particles'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-[#0d1117]">
        <ThemeProvider enableSystem={true} attribute="class">
          <ParticlesEffect />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
