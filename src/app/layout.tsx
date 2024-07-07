import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import * as styles from './layout.css'
import Image from 'next/image'
import logo from './logo.svg'
import ArtistProvider from './artist-context'
import TracksProvider from './track-context'
import { client } from '@/utils/microcmsClient'

const NotoSans = Noto_Sans_JP({
  weight: 'variable',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hear Spot',
  appleWebApp: {
    title: 'Hear Spot',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#f5f5f5',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${NotoSans.className} ${styles.container}`}>
        <div className={styles.display}>
          <div className={styles.inner}>
            <header className={styles.header}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </header>
            <ArtistProvider
              data={await client.getObject({
                endpoint: 'artist',
                queries: { limit: 100 },
              })}
            >
              <TracksProvider
                data={await client.getObject({
                  endpoint: 'track',
                  queries: { limit: 100 },
                })}
              >
                <div className={styles.content}>{children}</div>
              </TracksProvider>
            </ArtistProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
