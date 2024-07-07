'use client'

import { useArtist } from '@/app/artist-context'
import * as styles from './index.css'
import Artist from './Artist'
import { useRouter } from 'next/navigation'

const ArtistList = () => {
  const { artists, setArtists } = useArtist()
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h2>アーティスト一覧</h2>
      <div className={styles.list}>
        {artists.map((artist, index) => (
          <Artist key={artist.id} image={artist.image} />
        ))}
      </div>
    </div>
  )
}

export default ArtistList
