'use client'

import { createContext, useContext, useState } from 'react'

export type ArtistNode = {
  id: string
  name: string
  image: string
  isSelected: boolean
}

export type Artist = {
  artists: ArtistNode[]
  setArtists: (artists: ArtistNode[]) => void
}

const ArtistContext = createContext<Artist | undefined>(undefined)

export const useArtist = () => {
  const context = useContext(ArtistContext)
  if (!context)
    throw new Error('useArtist must be used within a ArtistContext.Provider')
  return context
}

const ArtistProvider = ({ children }: { children: React.ReactNode }) => {
  const [artists, setArtists] = useState<ArtistNode[]>([
    {
      id: '1',
      name: 'Artist 1',
      image: 'https://via.placeholder.com/150',
      isSelected: false,
    },
    {
      id: '2',
      name: 'Artist 2',
      image: 'https://via.placeholder.com/150',
      isSelected: false,
    },
    {
      id: '3',
      name: 'Artist 3',
      image: 'https://via.placeholder.com/150',
      isSelected: false,
    },
  ])
  return (
    <ArtistContext.Provider value={{ artists, setArtists }}>
      {children}
    </ArtistContext.Provider>
  )
}

export default ArtistProvider
