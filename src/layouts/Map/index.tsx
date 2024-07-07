'use client'

import { useMemo, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import * as styles from './index.css'
import Image from 'next/image'
import positioning from './positioning.svg'
import Click from '@/components/Click'

const Map = () => {
  const [position, setPosition] = useState<[number, number]>([0, 0])

  const MapTile = useMemo(
    () =>
      dynamic(() => import('./MapTile'), {
        ssr: false,
      }),
    []
  )

  return (
    <div className={styles.container}>
      <MapTile position={position} />
      <Click
        onClick={() =>
          navigator.geolocation.getCurrentPosition((pos) =>
            setPosition([pos.coords.latitude, pos.coords.longitude])
          )
        }
      >
        <Image
          src={positioning}
          alt="現在地に移動"
          className={styles.positioning}
        />
      </Click>
    </div>
  )
}

export default Map
