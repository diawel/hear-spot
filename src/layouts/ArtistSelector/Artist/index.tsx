import * as styles from './index.css'

type ArtistProps = {
  image: string
  isChecked: boolean
}

const Artist = ({ image, isChecked }: ArtistProps) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="アー写" className={styles.image} />
      {isChecked && <div className={styles.overlay}>✅</div>}
    </div>
  )
}

export default Artist
