import { gdyFrame } from '@/assets/frame';
import { useFilterContext, usePhotosContext } from '@/hooks';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import { useRef } from 'react';

const positions = [
  { top: '12.5px', left: '12.5px' },
  { top: '175px', left: '12.5px' },
  { top: '337.5px', left: '12.5px' },
  { top: '500px', left: '12.5px' },
];

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
    <div className="flex flex-col items-center gap-3 p-3">
      <button
        className="bg-black p-2 text-white rounded-2xl"
        onClick={handleDownload}
      >
        다운로드
      </button>
      <div ref={divRef} className="relative h-[750px] w-[250px]">
        <img
          src={gdyFrame}
          alt="Photo Frame"
          className="absolute top-0 left-0 w-full h-full z-100"
        />

        {photos?.map((photo, index) => {
          return (
            <img
              src={photo}
              key={`Captured-${photo}`}
              alt={`Captured-${photo}`}
              className={`absolute ${filter} transform -scale-x-100 z-20`}
              style={{
                filter: filter,
                ...positions[index],
              }}
              width="225"
              height="150"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoFrame;
