'use client'

import { createContext, useContext } from 'react'

export type TrackNode = {
  id: string
  title: string
  image: string
  artistId: string
  music: string
}

export type Tracks = TrackNode[]

const TracksContext = createContext<Tracks | undefined>(undefined)

export const useTrack = () => {
  const context = useContext(TracksContext)
  if (!context)
    throw new Error('useTrack must be used within a TrackContext.Provider')
  return context
}

const TracksProvider = ({
  children,
  data,
}: {
  children: React.ReactNode
  data: any
}) => {
  const tracks = [
    {
      id: '1',
      title: 'Track 1',
      image: 'https://via.placeholder.com/150',
      artistId: '1',
      music: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Track 2',
      image: 'https://via.placeholder.com/150',
      artistId: '2',
      music: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Track 3',
      image: 'https://via.placeholder.com/150',
      artistId: '3',
      music: 'https://via.placeholder.com/150',
    },
  ]
  return (
    <TracksContext.Provider
      value={data.contents.map((track: any) => ({
        id: track.id,
        title: track.title,
        image: track.image.url,
        artistId: track.artist.id,
        music: track.music.url,
      }))}
    >
      {children}
    </TracksContext.Provider>
  )
}

export default TracksProvider
