import React from 'react'
import { artistBox, artistParagraph, artistParagraphWithBorder, artistContainer } from './index.css';

type ArtistCardProps = {
  image: string;
  name: string;
  isChecked: boolean;
  progress: number;
  onClick: () => void;
}

const Artist = (props: ArtistCardProps) => {  
  const { image, name, isChecked, progress, onClick } = props;
  const handleCleck = () => {
    onClick();
  }

  return (
    <>
    <div className={artistContainer} onClick={handleCleck}>
      {isChecked ?
      <div className={artistBox}>
      <p className={artistParagraph}>artist.image</p>
      <p className={artistParagraphWithBorder}>artist.name</p>
      </div>
      : 
      <div className={artistBox}>
      <p className={artistParagraph}>artist.image</p>
      <p className={artistParagraphWithBorder}>artist.name</p>
    </div>
    }
    </div>
  </>
  )
}

export default Artist
