import {
  blueberryJamImg,
  peachJamImg,
  peanutButterJamImg,
  strawberryJamImg,
} from '@/assets/imgs';
import { FilterObject } from '@/types/filter';

export const Filter: Record<string, FilterObject> = {
  straw: {
    iconUrl: strawberryJamImg,
    name: '딸기잼',
    filterStyle: 'grayscale(20%) brightness(1.1) contrast(110%) blur(1px)',
  },
  peach: {
    iconUrl: peachJamImg,
    name: '복숭아잼',
    filterStyle: 'grayscale(20%) brightness(1.1) contrast(110%) blur(1px)',
  },
  peanut: {
    iconUrl: peanutButterJamImg,
    name: '땅콩잼',
    filterStyle: 'grayscale(20%) brightness(1.1) contrast(110%) blur(1px)',
  },
  blueberry: {
    iconUrl: blueberryJamImg,
    name: '블루베리잼',
    filterStyle: 'grayscale(20%) brightness(1.1) contrast(110%) blur(1px)',
  },
};
