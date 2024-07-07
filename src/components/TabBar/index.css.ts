import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'space-around',
  backgroundColor: '#fff',
  paddingInline: 32,
})

export const tab = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 10,
})

export const icon = style({
  height: 32,
  width: 32,
  objectFit: 'contain',
})
