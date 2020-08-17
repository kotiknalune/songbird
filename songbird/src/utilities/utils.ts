export const capitalizeString = (phrase : string) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  export function getRandomNumber(min: number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  export function isImageLoaded(image:any) {
    return image.complete && image.naturalHeight !== 0;
  }

  export const getCorrectAnswerId = (min = 0, max = 3) => (
    Math.floor(Math.random() * (max - min + 1)) + min
  );
  