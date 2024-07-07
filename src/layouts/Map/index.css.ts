import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  height: '100%',
})

export const mapWrapper = style({
  height: '100%',
  width: '100%',
})

export const positioningContainer = style({
  position: 'absolute',
  right: 16,
  bottom: 16,
  zIndex: 1000,
})

export const popupContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 10000,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 16,
})

export const popup = style({
  backgroundColor: '#fff',
  padding: 16,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
})

export const popupTrack = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const popupTrackImage = style({
  width: 64,
  height: 64,
  objectFit: 'cover',
  borderRadius: 8,
})

export const popupTrackTitle = style({
  fontSize: 20,
  fontWeight: 'bold',
})

export const popupTrackArtist = style({
  fontSize: 14,
})

export const popupButton = style({
  backgroundColor: '#FFC700',
  padding: '8px 24px',
  borderRadius: 50,
})
