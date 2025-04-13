import {
  realToastFrame,
  toast2Frame,
  toast3D2Frame,
  toast3DFrame,
  toastFrame,
} from '@/assets/frames';

export const toastFrames: Record<string, string> = {
  토스트: realToastFrame,
  버터토스트: toastFrame,
  토스트ed: toast2Frame,
  '딸기잼 묻은 토스트': toast3DFrame,
  '도리도리 토스트': toast3D2Frame,
};
