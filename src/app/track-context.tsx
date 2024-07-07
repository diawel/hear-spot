'use client'

import { createContext, useContext } from 'react'

export type TrackNode = {
  id: string
  titile: string
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

const TracksProvider = ({ children }: { children: React.ReactNode }) => {
  const tracks = [
    {
      id: '1',
      titile: 'Track 1',
      image: 'https://via.placeholder.com/150',
      artistId: '1',
      music: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      titile: 'Track 2',
      image: 'https://via.placeholder.com/150',
      artistId: '2',
      music: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      titile: 'Track 3',
      image: 'https://via.placeholder.com/150',
      artistId: '3',
      music: 'https://via.placeholder.com/150',
    },
  ]
  return (
    <TracksContext.Provider value={tracks}>{children}</TracksContext.Provider>
  )
}

export default TracksProvider
