import { useState, useRef, useEffect } from 'react';

const CameraCapture = () => {
  const { photos, setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { filter, setFilter } = useFilterContext();

  useEffect(() => {
    openCamera();
  }, []);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        setStreamVideo(stream);
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch(error => {
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

    if (images.length >= 4) return;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // 비디오 화면을 캔버스에 그리기
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // 캔버스를 이미지로 변환
        const imageData = canvas.toDataURL('image/png');
        setImages(prev => [...prev, imageData]);
      }
    }
  };

  const applyFilter = () => {
    const filter = 'grayscale(20%) brightness(1.1) contrast(110%) blur(1px)';
    setFilter(filter);
  };

  return (
    <div className="flex flex-col w-xl gap-2">
      <video
        ref={videoRef}
        width="720"
        height="480"
        style={{ filter: filter }}
      />
      <div className="flex flex-row justify-center gap-10">
        {photos?.length < 4 && (
          <button
            className="bg-black p-3 text-white rounded-2xl"
            onClick={capturePhoto}
          >
            사진 찍기
          </button>
        )}
        <button onClick={() => applyFilter()}>사진 필터</button>
      </div>

      <canvas
        ref={canvasRef}
        width="720"
        height="480"
        style={{ display: 'none' }}
      ></canvas>
    </div>
  );
};

export default CameraCapture;
