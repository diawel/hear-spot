'use client'

import { useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

const Map = () => {
  const MapTile = useMemo(
    () =>
      dynamic(() => import('./MapTile'), {
        ssr: false,
      }),
    []
  )
  return (
    <div style={{ height: '100%' }}>
      <MapTile />
    </div>
  )
}

export default Map
