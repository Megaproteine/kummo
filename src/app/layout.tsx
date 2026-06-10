import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KUMMO — Comunitatea care negociază',
  description: 'Împreună cumpărăm mai bine. Votează, alătură-te unei campanii și cumpără la preț negociat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
