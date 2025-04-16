import { RefObject } from 'react';

interface Props {
  videoRef: RefObject<HTMLVideoElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
}
const MobileCamera = ({ videoRef, canvasRef }: Props) => {
  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 scale-x-[-1] 
            object-cover z-0 shadow-md"
      />
      <canvas
        className="hidden"
        ref={canvasRef}
        width="1080"
        height="1920"
      ></canvas>
    </>
  );
};

export default MobileCamera;
