'use client'

import { usePlayer } from '@/app/(player)/player-context'
import * as styles from './index.css'
import { useTrack } from '@/app/track-context'
import { useArtist } from '@/app/artist-context'

const Player = () => {
  const { queue, player, setQueue } = usePlayer()
  const tracks = useTrack()
  const { artists } = useArtist()

  if (queue.length === 0)
    return (
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.title}>再生中の曲はありません</div>
      </div>
    )

  const track = tracks.find((track) => track.id === queue[0])
  if (!track)
    return (
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.title}>再生中の曲はありません</div>
      </div>
    )

  const artist = artists.find((artist) => artist.id === track.artistId)
  if (!artist)
    return (
      <div className={styles.container}>
        <img src={track.image} alt="アルバムアート" className={styles.image} />
        <div>
          <div className={styles.title}>{track.title.replaceAll('_', ' ')}</div>
          <div className={styles.artist}>{}</div>
        </div>
      </div>
    )

  return (
    <div className={styles.container}>
      <img src={track.image} alt="アルバムアート" className={styles.image} />
      <div>
        <div className={styles.title}>{track.title.replaceAll('_', ' ')}</div>
        <div className={styles.artist}>{artist.name}</div>
      </div>
    </div>
  )
}

export default Player
