'use client'

import { useArtist } from '@/app/artist-context'
import * as styles from './index.css'
import Click from '@/components/Click'
import Artist from './Artist'
import { useRouter } from 'next/navigation'

const ArtistSelector = () => {
  const { artists, setArtists } = useArtist()
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h2>興味のあるアーティストを選択してください</h2>
      <div className={styles.list}>
        {artists.map((artist, index) => (
          <Click
            key={artist.id}
            onClick={() => {
              const newArtists = [...artists]
              newArtists[index] = {
                ...artist,
                isSelected: !artist.isSelected,
              }
              setArtists(newArtists)
            }}
          >
            <Artist image={artist.image} isChecked={artist.isSelected} />
          </Click>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Click
          onClick={() => {
            router.push('/map')
          }}
        >
          <div className={styles.button}>決定</div>
        </Click>
      </div>
    </div>
  )
}

export default ArtistSelector
