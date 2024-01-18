import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from "@mantine/notifications";

const inter = Inter({ subsets: ['latin'] })

// Used to define application metadata to improve SEO and web shareability.
export const metadata: Metadata = {
  title: 'Medito - Fundraising',
  description: 'Unlock tranquility and embrace mindfulness with Medito. Support our mission to make meditation accessible to all by contributing to our fundraising campaign. Join the movement towards universal mindfulness!',
  keywords: "Medito, meditation, mindfulness, fundraising, mental well-being, guided meditation"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className}`}>
        <MantineProvider defaultColorScheme="light">
          <Notifications position="top-right"/>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
