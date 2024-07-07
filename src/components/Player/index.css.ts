import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: 16,
  alignItems: 'center',
  gap: 16,
})

export const image = style({
  width: 42,
  height: 42,
  objectFit: 'cover',
  borderRadius: 8,
  backgroundColor: '#ddd',
})

export const title = style({
  fontSize: 16,
  fontWeight: 'bold',
})

export const artist = style({
  fontSize: 12,
})
