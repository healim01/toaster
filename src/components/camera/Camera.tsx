import { RefObject } from 'react';

interface Props {
  videoRef: RefObject<HTMLVideoElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
}

const Camera = ({ videoRef, canvasRef }: Props) => {
  return (
    <>
      <video
        ref={videoRef}
        className="absolute bottom-20 left-88 w-4/5 max-w-[450px] aspect-video 
      -translate-x-1/2 object-contain scale-x-[-1]
      z-0 rounded-2xl shadow-md"
      />
      <canvas
        className="hidden"
        ref={canvasRef}
        width="1920"
        height="1080"
      ></canvas>
    </>
  );
};

export default Camera;
