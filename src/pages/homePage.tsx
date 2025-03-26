import { useState } from 'react';
import CameraCapture from '../components/CameraCapture';

const HomePage = () => {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  return (
    <div className='flex flex-row items-center justify-center w-full gap-10'>
      <CameraCapture setImages={setCapturedImages} />
    </div>
  );
};

export default HomePage;
