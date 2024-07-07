import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
})

export const list = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
  padding: 8,
})

export const buttonContainer = style({
  marginInline: 'auto',
  margin: '8px auto',
  display: 'flex',
  justifyContent: 'center',
})

export const button = style({
  backgroundColor: '#FFC700',
  padding: '8px 24px',
  borderRadius: 50,
  fontWeight: 'bold',
})
