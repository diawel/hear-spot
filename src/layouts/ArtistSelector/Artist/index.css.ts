import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
})

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 24,
})
