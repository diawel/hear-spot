import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  height: '100%',
})

export const mapWrapper = style({
  height: '100%',
  width: '100%',
})

export const positioning = style({
  position: 'absolute',
  right: 16,
  bottom: 16,
  zIndex: 1000,
})
