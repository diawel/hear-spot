import { style } from '@vanilla-extract/css';

export const artistName = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: 0,
  padding: 0,
});

export const artistBox= style({
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