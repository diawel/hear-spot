'use client'
import Artist from '@/components/Artist'
import { artistName,artistBox } from './index.css'
import Link from 'next/link'

export type CollectionProps = {
  image: string
  name: string
  isChecked: boolean
  progress: number
  onClick: () => void
}

export default function Collection (props: CollectionProps) {
  const { image, name, isChecked, progress, onClick } = props
  return (
    <div>
      <h2>これまで集めたアーティスト</h2>
      <div>
      <Link href='collection/1'>
      <Artist
        image={props.image}
        name={props.name}
        isChecked={props.isChecked}
        progress={props.progress}
        onClick={props.onClick}
      />
      </Link>
      </div>
    </div>
  )
}

