import {
  blueberryJamImg,
  blueberryJamOpenImg,
  peachJamImg,
  peachJamOpenImg,
  peanutButterJamImg,
  peanutButterJamOpenImg,
  strawberryJamImg,
  strawberryJamOpenImg,
} from '@/assets/imgs';
import { FilterObject } from '@/types/filter';

export const Filter: Record<string, FilterObject> = {
  straw: {
    iconUrl: strawberryJamImg,
    openIconUrl: strawberryJamOpenImg,
    name: '딸기잼',
    filterStyle: `grayscale(20%) 
    brightness(1.1) 
    contrast(110%) 
    blur(.5px)`,
  },
  peach: {
    iconUrl: peachJamImg,
    openIconUrl: peachJamOpenImg,
    name: '복숭아잼',
    filterStyle: `grayscale(30%) 
    brightness(1.1) 
    contrast(110%)`,
  },
  peanut: {
    iconUrl: peanutButterJamImg,
    openIconUrl: peanutButterJamOpenImg,
    name: '땅콩잼',
    filterStyle: `grayscale(20%) 
    brightness(1.1) 
    contrast(1.1) 
    saturate(1.2) 
    blur(.5px) 
    hue-rotate(5deg)`,
  },
  blueberry: {
    iconUrl: blueberryJamImg,
    openIconUrl: blueberryJamOpenImg,
    name: '블루베리잼',
    filterStyle: `grayscale(20%) 
      brightness(1.1) 
      contrast(110%) 
      blur(1px)`,
  },
  fresh: {
    iconUrl: blueberryJamImg,
    openIconUrl: blueberryJamOpenImg,
    name: '프레쉬',
    filterStyle: `brightness(1.2)
      contrast(1)
      saturate(1.1)
      sepia(0.05)
      drop-shadow(0 0 5px rgba(255,255,255,0.5))`,
  },
  black: {
    iconUrl: blueberryJamImg,
    openIconUrl: blueberryJamOpenImg,
    name: 'black',
    filterStyle: `grayscale(100%) 
      contrast(150%) 
      brightness(110%)`,
  },
};
