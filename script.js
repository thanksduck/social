// This is an optional step. You can remove it if you don't need it.
// It's used to preload the SVG images to make sure they are loaded before they are displayed.
const images = [
    'assets/telegram.svg',
    'assets/instagram.svg',
    'assets/github.svg',
    'assets/snapchat.svg',
    'assets/twitter.svg',
  ];
  
  for (const image of images) {
    const img = new Image();
    img.src = image;
  }
  