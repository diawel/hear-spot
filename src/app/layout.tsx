import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import * as styles from './layout.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${NotoSans.className} ${styles.container}`}>
        <div className={styles.display}>
          <div className={styles.inner}>{children}</div>
        </div>
      </body>
    </html>
  )
}
