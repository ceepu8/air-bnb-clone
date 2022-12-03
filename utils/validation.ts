export const checkImgValid = (imgSrc: string) => {
  const randomNumber = Math.floor(Math.random() * 10 + 2);
  const ROOM_DEFAULT_IMG = `https://airbnbnew.cybersoft.edu.vn/images/phong${randomNumber}.png`;

  if (imgSrc.includes('data:image') || imgSrc.includes('https://')) {
    return imgSrc;
  }
  return ROOM_DEFAULT_IMG;
};
