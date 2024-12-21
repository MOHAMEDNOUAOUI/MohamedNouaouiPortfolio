import localFont from 'next/font/local';

// Eurostile font
export const eurostyleNormal = localFont({
  src: [
    {
      path: '../lib/fonts/eurostile.ttf',  // Update path
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../lib/fonts/EuroStyleNormal.ttf',  // Update path
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
});

// Roboto font variations
export const robotoRegular = localFont({
  src: [
    {
      path: '../lib/fonts/Roboto-Regular.ttf',  // Update path
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const robotoBold = localFont({
  src: [
    {
      path: '../lib/fonts/Roboto-Bold.ttf',  // Update path
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const robotoLight = localFont({
  src: [
    {
      path: '../lib/fonts/Roboto-Light.ttf',  // Update path
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
});