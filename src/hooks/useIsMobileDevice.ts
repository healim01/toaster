import { useMemo } from 'react';

const useIsMobileDevice = () =>
  useMemo(() => /Mobi|Android|iPhone|iPod/i.test(navigator.userAgent), []);

export default useIsMobileDevice;
