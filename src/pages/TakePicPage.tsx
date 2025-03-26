import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/routePath';
import { CameraCapture, CameraFrame } from '@/components/takePic';

const TakePicPage = () => {
  const navigate = useNavigate();
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  // useEffect(() => {
  //   if (capturedImages.length === 4) navigate(ROUTE_PATH.save);
  // }, [capturedImages]);

  return (
    <div className="flex flex-row items-center justify-center w-full gap-10">
      <CameraCapture images={capturedImages} setImages={setCapturedImages} />
      <CameraFrame imgs={capturedImages} />
    </div>
  );
};

export default TakePicPage;
