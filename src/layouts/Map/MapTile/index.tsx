import { usePlayer } from '@/app/(player)/player-context'
import { useTrack } from '@/app/track-context'
import { icon } from 'leaflet'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

type MapTileProps = {
  position: [number, number]
  onFind: (trackId: string) => void
}

const MapCenterHandler = ({ position }: { position: [number, number] }) => {
  const map = useMap()
  useEffect(() => {
    map.panTo(position)
  }, [map, position])

  return null
}

const musicIcon = icon({
  iconUrl: '/icons/music.png',
  iconSize: [45, 64],
  className: 'marker',
})

const distance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const R = Math.PI / 180
  lat1 *= R
  lng1 *= R
  lat2 *= R
  lng2 *= R
  return (
    6371 *
    Math.acos(
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) +
        Math.sin(lat1) * Math.sin(lat2)
    )
  )
}

const MapTile = ({ position, onFind }: MapTileProps) => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    0, 0,
  ])
  const [musics, setMusics] = useState<
    {
      position: [number, number]
      trackId: string
      passed: boolean
    }[]
  >([
    {
      position: [35.65865, 139.70476],
      trackId: 'rf_bezp7hj3',
      passed: false,
    },

    {
      position: [35.65995, 139.70577],
      trackId: '9rxg7kjq7z',
      passed: false,
    },
    {
      position: [35.65977, 139.7024],
      trackId: 'os62fk70x7',
      passed: false,
    },
    {
      position: [35.65804, 139.70717],
      trackId: 'ikemg7l6fnc',
      passed: false,
    },
    {
      position: [35.66087, 139.70627],
      trackId: 'y7i_jr19if',
      passed: false,
    },
  ])
  const { queue, setQueue } = usePlayer()
  const tracks = useTrack()

  useEffect(() => {
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setMusics(
          musics.map((music) => {
            if (
              !music.passed &&
              distance(
                music.position[0],
                music.position[1],
                pos.coords.latitude,
                pos.coords.longitude
              ) < 0.03
            ) {
              setQueue([...queue, music.trackId])
              onFind(music.trackId)
              return { ...music, passed: true }
            }
            return music
          })
        )
        setCurrentPosition([pos.coords.latitude, pos.coords.longitude])
      })
    }
    updatePosition()
    const updatePositionInterval = setInterval(updatePosition, 1000)
    return () => clearInterval(updatePositionInterval)
  }, [musics, onFind, queue, setQueue, tracks])

  return (
    <MapContainer
      center={position}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {musics.map((music) => {
        if (music.passed) return null

        return (
          <Marker
            key={music.trackId}
            position={music.position}
            icon={musicIcon}
          />
        )
      })}
      <Marker
        position={currentPosition}
        icon={icon({
          iconUrl: '/icons/user.svg',
          iconSize: [16, 16],
          className: 'marker',
        })}
      />
      <MapCenterHandler position={position} />
    </MapContainer>
  )
}

export default MapTile
