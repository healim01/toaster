import { useState, useRef, useEffect } from 'react';

const CameraCapture = ({
  setImages,
}: {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [streamVideo, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    openCamera();
  }, []);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setStreamVideo(stream);
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((error) => {
        console.error('Error opening camera:', error);
      });
  };

  //   const closeCamera = () => {
  //     if (streamVideo) {
  //       const tracks = streamVideo.getTracks();
  //       if (tracks[0]) {
  //         tracks[0].stop();
  //       }
  //       setStreamVideo(null);
  //     }
  //   };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // 비디오 화면을 캔버스에 그리기
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // 캔버스를 이미지로 변환
        const imageData = canvas.toDataURL('image/png');
        setImages((prev) => [...prev, imageData]);
      }
    }
  };

  return (
    <div className='flex flex-col w-xl'>
      <div>
        <video ref={videoRef} width='720' height='480' />
      </div>
      <div className='flex flex-row justify-center gap-10'>
        <button onClick={capturePhoto}>사진 찍기</button>
      </div>
      <canvas
        ref={canvasRef}
        width='720'
        height='480'
        style={{ display: 'none' }}
      ></canvas>
    </div>
  );
};

export default CameraCapture;
