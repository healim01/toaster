// import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { useRef } from 'react';
import saveAs from 'file-saver';
import { useFilterContext, usePhotosContext } from '@/hooks';

const PhotoFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const blob = await domtoimage.toBlob(div);
      saveAs(blob, 'result.png');
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>다운로드</button>
      <div
        ref={divRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'lime',
          filter: filter,
          padding: '4px',
          gap: '4px',
        }}
      >
        {photos.map(photo => (
          <img
            src={photo}
            key={`Captured-${photo}`}
            alt={`Captured-${photo}`}
            width="300"
            style={{
              filter: filter,
              transform: 'scaleX(-1)',
              aspectRatio: '3 / 2',
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoFrame;
