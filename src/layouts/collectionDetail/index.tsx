import Link from 'next/link';
import React from 'react'
import { artistBox, button ,row, imgBox} from './index.css';

export default function CollectData () {
// const CollectData = ({ params }:{params:{id:string}}) =>   {

  return (
    <div>
      <div className={artistBox}>
      {/* artist.image */}
      <p>artist.name</p>
      </div>
    <div className={row}>
      <div className={imgBox}>
    image
      </div>
      <p>タイトル1</p>
    </div>
    <div>
      <Link href="/collection">
      <p className={button} >コレクション一覧へ</p>
      </Link>
    </div>
    </div>
  )
}


