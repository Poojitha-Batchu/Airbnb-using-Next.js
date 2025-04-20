import './globals.css'
import { Inter } from 'next/font/google'
import favicon from '/public/images/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'A clone of the Airbnb website',
  icons: {
    icon: {favicon},
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
