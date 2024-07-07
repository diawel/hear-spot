'use client'

import { createContext, useContext, useState } from 'react'

export type Player = {
  queue: string[] // Track ID
  player: React.ReactNode
  setQueue: (queue: string[]) => void
}

const PlayerContext = createContext<Player | undefined>(undefined)

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (!context)
    throw new Error('usePlayer must be used within a PlayerProvider')
  return context
}

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [queue, setQueue] = useState<string[]>([])
  return (
    <PlayerContext.Provider
      value={{
        queue: queue,
        player: <audio />,
        setQueue: setQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerProvider
