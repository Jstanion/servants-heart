import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "A Servant's Heart Community Outreach",
  description: "A Servant's Heart is a non-profit organization that provides food, clothing, and other resources to those in need in the greater Lancaster area.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
