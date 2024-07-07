'use client'

import * as styles from './index.css'
import map from './map.svg'
import collection from './collection.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Click from '../Click'

const TabBar = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Click onClick={() => router.push('/map')}>
        <div className={styles.tab}>
          <Image src={map} alt="" className={styles.icon} />
          マップ
        </div>
      </Click>
      <Click onClick={() => router.push('/collection')}>
        <div className={styles.tab}>
          <Image src={collection} alt="" className={styles.icon} />
          コレクション
        </div>
      </Click>
    </div>
  )
}

export default TabBar
