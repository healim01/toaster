import {
  blueberryJamImg,
  blueberryJamOpenImg,
  peachJamImg,
  peachJamOpenImg,
  peanutButterJamImg,
  peanutButterJamOpenImg,
  strawberryJamImg,
  strawberryJamOpenImg,
} from '@/assets';
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
    iconUrl: peanutButterJamImg,
    openIconUrl: peanutButterJamOpenImg,
    name: '땅콩잼',
    filterStyle: `grayscale(30%) 
    brightness(1.1) 
    contrast(110%)`,
  },
  peanut: {
    iconUrl: peachJamImg,
    openIconUrl: peachJamOpenImg,
    name: '복숭아잼',
    filterStyle: `grayscale(20%) 
    brightness(1.1) 
    contrast(1.1) 
    saturate(1.2) 
    blur(.5px) 
    hue-rotate(5deg)`,
  },
  fresh: {
    iconUrl: blueberryJamImg,
    openIconUrl: blueberryJamOpenImg,
    name: '블루베리잼',
    filterStyle: `brightness(1.2)
      contrast(1)
      saturate(1.1)
      sepia(0.05)
      drop-shadow(0 0 5px rgba(255,255,255,0.5))`,
  },
  black: {
    iconUrl: blueberryJamImg,
    openIconUrl: blueberryJamOpenImg,
    name: '베지마이트',
    filterStyle: `grayscale(100%) 
      contrast(150%) 
      brightness(110%)`,
  },
  peach2: {
    iconUrl: blueberryJamImg,
    openIconUrl: blueberryJamOpenImg,
    name: '라즈베리잼',
    filterStyle: `
    brightness(1.15)      
    contrast(0.9)         
    saturate(1.1)        
    sepia(0.03)          
    hue-rotate(-2deg)    
    blur(.5px)
    `,
  },
};
