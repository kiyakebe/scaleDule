import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'scaleDule',
  description: "scaleDule lets you schedule your tasks and events with ease, helping you stay organized and productive.",
  keywords: ['schedule', 'tasks', 'events', 'productivity'],
  authors: [{ name: 'scaleDule Team', url: 'https://scaledule.com' }],
  creator: 'scaleDule Team',
  openGraph: {
    title: 'scaleDule',
    description: "scaleDule lets you schedule your tasks and events with ease, helping you stay organized and productive.",
    url: 'https://scaledule.com',
    siteName: 'scaleDule',
    images: [
      {
        url: 'https://scaledule.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'scaleDule - Schedule Your Tasks and Events',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'scaleDule',
    description: "scaleDule lets you schedule your tasks and events with ease, helping you stay organized and productive.",
    images: ['https://scaledule.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/shortcut-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
