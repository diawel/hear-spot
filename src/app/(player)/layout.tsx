import * as styles from './index.css'
import TabBar from '@/components/TabBar'
import PlayerProvider from './player-context'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlayerProvider>
      <div className={styles.container}>
        {children}
        <div />
        <TabBar />
      </div>
    </PlayerProvider>
  )
}

export default Layout
