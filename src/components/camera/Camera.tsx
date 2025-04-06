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
        className="absolute w-4/6 md:w-4/5 max-w-[480px] aspect-video 
      -translate-x-1/2 object-contain scale-x-[-1]
      z-20 rounded-2xl shadow-md"
        style={{
          left: '44%',
          bottom: '11%',
          objectFit: 'cover',
        }}
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
