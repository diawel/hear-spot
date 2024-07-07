'use client'

import { use, useEffect, useMemo, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import * as styles from './index.css'
import Image from 'next/image'
import positioning from './positioning.svg'
import Click from '@/components/Click'
import { useTrack } from '@/app/track-context'
import { useArtist } from '@/app/artist-context'

const Map = () => {
  const [position, setPosition] = useState<[number, number]>([0, 0])
  const [popup, setPopup] = useState<{
    title: string
    artist: string
    image: string
  } | null>(null)
  const tracks = useTrack()
  const { artists } = useArtist()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) =>
      setPosition([pos.coords.latitude, pos.coords.longitude])
    )
  }, [])

  const MapTile = useMemo(
    () =>
      dynamic(() => import('./MapTile'), {
        ssr: false,
      }),
    []
  )

  return (
    <div className={styles.container}>
      <MapTile
        position={position}
        onFind={(trackId) => {
          const track = tracks.find((track) => track.id === trackId)
          if (!track) return
          setPopup({
            title: track.title.replaceAll('_', ' '),
            artist:
              artists.find((artist) => artist.id === track.artistId)?.name ||
              '',
            image: track.image,
          })
        }}
      />
      <div className={styles.positioningContainer}>
        <Click
          onClick={() => {
            navigator.geolocation.getCurrentPosition((pos) =>
              setPosition([pos.coords.latitude, pos.coords.longitude])
            )
          }}
        >
          <Image src={positioning} alt="現在地に移動" />
        </Click>
      </div>
      {popup && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <div className={styles.popupTrack}>
              <img
                src={popup.image}
                alt="アルバムアート"
                className={styles.popupTrackImage}
              />
              <div>
                <div className={styles.popupTrackTitle}>{popup.title}</div>
                <div className={styles.popupTrackArtist}>{popup.artist}</div>
              </div>
            </div>
            を発見しました
            <Click
              onClick={() => {
                setPopup(null)
              }}
            >
              <div className={styles.popupButton}>OK</div>
            </Click>
          </div>
        </div>
      )}
    </div>
  )
}

export default Map
