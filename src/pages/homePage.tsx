import { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import CameraFrame from '../components/CameraFrame';

const HomePage = () => {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  return (
    <div className='flex flex-row items-center justify-center w-full gap-10'>
      <CameraCapture images={capturedImages} setImages={setCapturedImages} />
      <CameraFrame imgs={capturedImages} />
    </div>
  );
};

export default HomePage;
