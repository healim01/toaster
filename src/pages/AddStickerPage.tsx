import { sticker } from '@/assets';
import { FloatingButton } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { usePhotoDownload } from '@/hooks';
import { useTrackPageView } from '@/service/amplitude/';
import { useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';

type StickerItem = {
  id: string;
  src: string;
};

const AddStickerPage = () => {
  useTrackPageView({ eventName: '[View] 스티커 추가 페이지' });

  const [addedStickers, setAddedStickers] = useState<StickerItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const stickerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [readyToRenderMoveable, setReadyToRenderMoveable] = useState(false);

  // ✅ 스티커 클릭 시 새로 생성
  const handleAddSticker = (src: string) => {
    console.log('?');
    const id = `sticker-${src}`;
    setAddedStickers(prev => [...prev, { id, src }]);
    setSelectedId(id);
  };

  useEffect(() => {
    if (selectedId && stickerRefs.current[selectedId]) {
      console.log(selectedId);
      setReadyToRenderMoveable(true);
    } else {
      setReadyToRenderMoveable(false);
    }
  }, [selectedId, addedStickers, setAddedStickers, setSelectedId]);

  const downloadDivRef = useRef<HTMLDivElement>(null);
  const { handleDownload } = usePhotoDownload(downloadDivRef);

  return (
    <div className="flex relative w-full md:h-[92vh] pt-2 pb-2">
      <div className="flex flex-col  md:flex-row gap-4 w-full h-full mt-[50px]">
        {/* 사진 영역 */}
        <div
          ref={downloadDivRef}
          className="flex items-center justify-center w-full md:w-[280px] h-fit bg-gray-50 p-4 rounded-lg shadow-md"
        >
          <PhotoFrame />
          {addedStickers.map(sti => (
            <div
              key={sti.id}
              className="absolute top-0 left-0 z-[100]"
              ref={el => {
                stickerRefs.current[sti.id] = el;
              }}
              onClick={() => {
                setSelectedId(sti.id);
                console.log('sti.id', sti.id);
              }}
              style={{ width: 80, height: 80, cursor: 'move' }}
            >
              <img src={sti.src} className="w-full h-full" />
            </div>
          ))}

          {selectedId && readyToRenderMoveable && (
            <Moveable
              key={selectedId}
              target={
                stickerRefs.current[selectedId]
                  ? stickerRefs.current[selectedId]
                  : console.log('nope')
              }
              draggable={true}
              onDrag={e => {
                e.target.style.transform = e.transform;
              }}
            />
          )}
        </div>

        <section className="flex flex-col w-full h-fit md:h-[85%] p-5 bg-gray-50 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-8 gap-4 w-full justify-center justify-items-center mb-4">
            {sticker.map((sti, idx) => (
              <div
                key={idx}
                className="target cursor-pointer"
                onClick={() => handleAddSticker(sti)}
              >
                <img src={sti} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <FloatingButton
        label="사진 편집 완료"
        onClick={handleDownload}
        variant="contained"
        color="pink"
        size="medium"
        round
      />
    </div>
  );
};

export default AddStickerPage;
