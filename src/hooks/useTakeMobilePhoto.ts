import { usePhotosContext } from '@/hooks';
import { trackTakeToasterButton } from '@/service/amplitude/trackEvent';
import { useEffect, useRef } from 'react';

const useTakeMobilePhoto = () => {
  const { photos, setPhotos } = usePhotosContext();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
          facingMode: 'user',
        },
      })
      .then(stream => {
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play().catch(err => {
              console.warn('Video play interrupted:', err);
            });
          };
        }
      })
      .catch(error => {
        console.error('Error opening camera:', error);
      });
  };

  const closeCamera = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      const stream = video.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
      video.srcObject = null;
    }
  };

  const takePhoto = () => {
    trackTakeToasterButton();

    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (!context) return;

      context.save();

      context.translate(canvas.width, 0);
      context.rotate((90 * Math.PI) / 180);

      context.drawImage(video, 0, 0, canvas.height, canvas.width);
      context.restore();

      const imageData = canvas.toDataURL('image/png');
      setPhotos(prev => [...prev, imageData]);
    }
  };

  useEffect(() => {
    openCamera();
  }, []);

  useEffect(() => {
    if (photos.length === 4) closeCamera();
  }, [photos]);

  return {
    videoRef,
    canvasRef,
    takePhoto,
    closeCamera,
  };
};

export default useTakeMobilePhoto;
