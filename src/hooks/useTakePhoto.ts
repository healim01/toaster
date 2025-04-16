import { usePhotosContext } from '@/hooks';
import { trackTakeToasterButton } from '@/service/amplitude/trackEvent';
import { useEffect, useRef, useState } from 'react';

const useTakePhoto = () => {
  const { photos, setPhotos } = usePhotosContext();

  const [streamVideo, setStreamVideo] = useState<MediaStream | null>(null);
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
        setStreamVideo(stream);
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
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }

    if (streamVideo) {
      streamVideo.getTracks().forEach(track => {
        track.stop();
      });
      setStreamVideo(null);
    }
  };

  const takePhoto = () => {
    trackTakeToasterButton();

    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (!context) return;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
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

  return { videoRef, canvasRef, takePhoto, closeCamera };
};

export default useTakePhoto;
