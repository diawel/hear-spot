import * as styles from './index.css'

type ArtistProps = {
  image: string
}

const Artist = ({ image }: ArtistProps) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="アー写" className={styles.image} />
    </div>
  )
}

export default Artist
