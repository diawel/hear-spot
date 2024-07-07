'use client';

import Artist from '@/components/Artist';
import React from 'react';

type SelectArtistProps = {
  image: string;
  name: string;
  isChecked: boolean;
  progress: number;
  onClick: () => void;
}

const SelectArtist = (props: SelectArtistProps) => {



  return (
      <>
      <Artist {...props} />
      </>
    );
  };

export default SelectArtist;
