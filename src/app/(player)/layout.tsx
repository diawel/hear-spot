import * as styles from './layout.css'
import TabBar from '@/components/TabBar'
import PlayerProvider from './player-context'
import Player from '@/components/Player'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlayerProvider>
      <div className={styles.container}>
        {children}
        <Player />
        <TabBar />
      </div>
    </PlayerProvider>
  )
}

export default Layout
