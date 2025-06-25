import { PhotoDownloadSection, PhotoFrame } from '@/components/photo';
import { useGetStickersQuery } from '@/hooks/queries';
import { useTrackPageView } from '@/service/amplitude';
import { AddedStickerItem } from '@/types/sticker';
import { useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';

const getStickerId = (src: string, order: number) => {
  const parts = src.split('/');
  const filename = parts.pop();
  return `sticker-${order}-${encodeURIComponent(filename!)}`;
};

const AddStickerPage = () => {
  useTrackPageView({ eventName: '[View] 스티커 추가 페이지' });
  const { stickers } = useGetStickersQuery();

  const [addedStickers, setAddedStickers] = useState<AddedStickerItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const stickerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [readyToRenderMoveable, setReadyToRenderMoveable] = useState(false);

  const downloadDivRef = useRef<HTMLDivElement>(null);

  const handleAddSticker = (src: string) => {
    const id = getStickerId(src, addedStickers.length);
    setAddedStickers(prev => [...prev, { id, src }]);
    setSelectedId(id);
  };

  useEffect(() => {
    if (!selectedId) return;

    const frame = requestAnimationFrame(() => {
      if (stickerRefs.current[selectedId]) {
        setReadyToRenderMoveable(true);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      setReadyToRenderMoveable(false);
    };
  }, [selectedId, addedStickers]);

  return (
    <div className="flex relative w-full md:h-[92vh] pt-2 pb-2">
      <div className="flex flex-col  md:flex-row gap-4 w-full h-full mt-[50px]">
        {/* 사진 영역 */}
        <div
          ref={downloadDivRef}
          className="relative flex items-center justify-center w-full md:w-[280px] h-fit bg-gray-50 p-4 rounded-lg shadow-md"
        >
          <PhotoFrame />

          {/* 추가된 스티커들 */}
          {addedStickers.map((sti, idx) => (
            <div
              key={sti.id}
              className="absolute top-0 left-0 z-[100]"
              ref={el => {
                const id = getStickerId(sti.src, idx);
                stickerRefs.current[id] = el;
              }}
              onClick={() => {
                setSelectedId(sti.id);
              }}
              style={{
                minWidth: 'fit-content',
                maxWidth: '100%',
                height: '80px',
                cursor: 'move',
              }}
            >
              <img src={sti.src} className="w-full h-full" />
            </div>
          ))}
        </div>

        {/* 스티커 이동 수단 */}
        {selectedId && readyToRenderMoveable && (
          <Moveable
            key={selectedId}
            target={stickerRefs.current[selectedId] || undefined}
            draggable={true}
            scalable={true}
            rotatable={true}
            pinchable={true}
            pinchOutside={true}
            onRender={e => {
              e.target.style.cssText += e.cssText;
            }}
          />
        )}

        {/* 스티커 리스트 */}
        <section className="flex flex-col w-full h-fit md:h-[85%] p-5 bg-gray-50 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-8 gap-4 w-full justify-center justify-items-center mb-4">
            {stickers.map((sti, idx) => (
              <div
                key={idx}
                className="target cursor-pointer"
                onClick={() => handleAddSticker(sti.url)}
              >
                <img src={sti.url} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 사진 다운로드 섹션 */}
      <PhotoDownloadSection downloadDivRef={downloadDivRef} />
    </div>
  );
};

export default AddStickerPage;
