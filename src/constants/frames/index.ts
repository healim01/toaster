import { basicFrames } from './basicFrames';
import { wootecoFrames } from './event/wootecoFrames';
import { stickerFrames } from './stickerFrames';
import { toastFrames } from './toastFrames';

export const getFramesByEvent = (event?: string): Record<string, string> => {
  let eventFrames: Record<string, string> = {};

  switch (event) {
    case 'wooteco':
      eventFrames = wootecoFrames;
      break;

    default:
      eventFrames = {};
  }

  return {
    ...eventFrames,
    ...toastFrames,
    ...stickerFrames,
    ...basicFrames,
  };
};
