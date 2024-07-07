'use client'

import { useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import * as styles from './index.css'
import TabBar from '@/components/TabBar'

const Map = () => {
  const MapTile = useMemo(
    () =>
      dynamic(() => import('./MapTile'), {
        ssr: false,
      }),
    []
  )
  return (
    <div className={styles.container}>
      <MapTile />
    </div>
  )
}

export default Map
