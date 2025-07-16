import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thalasso-dev.com'), // Replace with your actual domain
  title: {
    default: 'Thalasso Dev | Modern Web Solutions',
    template: '%s | Thalasso Dev'
  },
  description: 'Professional web development services and solutions by Thalasso Dev',
  keywords: ['web development', 'react', 'nextjs', 'typescript', 'tailwind'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thalasso-dev.com',
    title: 'Thalasso Dev | Modern Web Solutions',
    description: 'Professional web development services and solutions by Thalasso Dev',
    siteName: 'Thalasso Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thalasso Dev',
    description: 'Professional web development services and solutions by Thalasso Dev',
  },
  verification: {
    google: 'your-google-verification-id', // Add your Google Search Console verification ID
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
