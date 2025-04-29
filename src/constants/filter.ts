import {
  blueberryJamImg,
  blueberryJamOpenImg,
  orangeJamImg,
  orangeJamOpenImg,
  peachJamImg,
  peachJamOpenImg,
  peanutButterJamImg,
  peanutButterJamOpenImg,
  strawberryJamImg,
  strawberryJamOpenImg,
  vegemiteJamImg,
  vegemiteJamOpenImg,
} from '@/assets';
import { Filter } from '@/types/filter';

export const Filters: Record<string, Filter> = {
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
    iconUrl: vegemiteJamImg,
    openIconUrl: vegemiteJamOpenImg,
    name: '베지마이트',
    filterStyle: `grayscale(100%) 
      contrast(150%) 
      brightness(110%)`,
  },
  peach2: {
    iconUrl: orangeJamImg,
    openIconUrl: orangeJamOpenImg,
    name: '오렌지잼',
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
