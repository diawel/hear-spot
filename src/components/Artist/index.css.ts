import { style } from '@vanilla-extract/css';

export const artistBox = style({
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px',
  borderRadius: '5px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  flex: '1 1 calc(50% - 20px)',
  maxWidth: '150px',
  width: '100%',
});

export const artistParagraph = style({
  margin: '0',
  padding: '5px 0',
});

export const artistParagraphWithBorder = style({
  borderTop: '1px solid #eee',
  paddingTop: '10px',
});

export const artistContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px',
  '@media': {
    'screen and (max-width: 430px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
