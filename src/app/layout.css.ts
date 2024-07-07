import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  height: '100svh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#eeeeee',
})

export const display = style({
  backgroundColor: '#ffffff',
  width: '100%',
  height: '100%',
  boxSizing: 'content-box',

  '@media': {
    'screen and (min-width: 480px)': {
      width: '360px',
      padding: '48px 8px',
      borderRadius: '36px',
      maxHeight: '660px',
    },
  },
})

const headerHeight = 56

export const header = style({
  display: 'flex',
  height: headerHeight,
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#FFC700',
  paddingInline: 24,
  position: 'sticky',
  top: 0,
})

export const logo = style({
  height: 32,
  width: 'auto',
})

export const inner = style({
  height: '100%',
  backgroundColor: '#f5f5f5',

  '@media': {
    'screen and (min-width: 480px)': {
      border: '1px solid #eeeeee',
    },
  },
})

export const content = style({
  height: `calc(100% - ${headerHeight}px)`,
  overflowY: 'auto',
  width: '100%',
})
