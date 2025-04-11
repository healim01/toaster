import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const mobileRegex = /android|iphone/i;

    if (mobileRegex.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return isMobile;
};

export default useIsMobile;
