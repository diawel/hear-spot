import { style } from '@vanilla-extract/css';

export const artistimage = style({
  height: '100%',

});

export const container = style({
  display: 'flex',
  justifyContent: 'center',  // 水平方向の中央揃え
  alignItems: 'center',      // 垂直方向の中央揃え
  flexWrap: 'wrap',          // 必要に応じて要素が折り返されるようにする
  width: '100%',             // 親要素の幅を設定
  height: '100vh',           // 親要素の高さを設定
  boxSizing: 'border-box',  
});

export const artistBox = style({
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px auto',
  borderRadius: '5px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  maxWidth: '150px',
  width: '100%',     
  display: 'flex',  
  justifyContent: 'center',  
  alignItems: 'center',          
});

export const imgBox = style({
  border: '1px solid #ccc',
  padding: '20px 5px',
  margin: '5px 5px',
  borderRadius: '5px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',        
});

export const musicname = style({
  margin: '5px ',
  padding: '5px 0',
});

export const button = style({
  border: '1px solid #ccc',
  margin: '15px auto',
  borderRadius: '5px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  maxWidth: '150px',
  justifyContent: 'center', 
  alignItems: 'center', 
  textEmphasisColor: 'black',
});

export const text = style({
  fontWeight: 'bold',
  margin: 0,
  padding: 0,
});

export const row = style({
  display: 'flex',
  alignItems: 'center',  // 垂直方向の中央揃え
});