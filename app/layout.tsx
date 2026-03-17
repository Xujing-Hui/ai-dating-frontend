import type { Metadata, Viewport } from 'next'
import { Caveat, Nunito, Architects_Daughter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const caveat = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-caveat'
})

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito'
})

const architectsDaughter = Architects_Daughter({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-architects'
})

export const metadata: Metadata = {
  title: 'ProfileGlow - Dating Profile Optimizer',
  description: 'Your dating profile, polished by AI — in seconds. Get AI-powered bio rewrites, photo rankings, and conversation starters.',
}

export const viewport: Viewport = {
  themeColor: '#FFF8F0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${nunito.variable} ${architectsDaughter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
