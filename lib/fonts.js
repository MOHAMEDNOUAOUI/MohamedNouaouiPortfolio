import localFont from 'next/font/local';

// Eurostile font
export const eurostyleNormal = localFont({
  src: [
    {
      path: '../public/fonts/eurostile.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../public/fonts/EuroStyleNormal.ttf',
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
      path: '../public/fonts/Roboto-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const robotoBold = localFont({
  src: [
    {
      path: '../public/fonts/Roboto-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const robotoLight = localFont({
  src: [
    {
      path: '../public/fonts/Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
});
