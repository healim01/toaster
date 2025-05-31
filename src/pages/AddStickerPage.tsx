import { sticker } from '@/assets';
import { FloatingButton } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { usePhotoDownload } from '@/hooks';
import { useTrackPageView } from '@/service/amplitude/';
const AddStickerPage = () => {
  useTrackPageView({ eventName: '[View] 스티커 추가 페이지' });

  return (
    <div className="flex relative w-full md:h-[92vh] pt-2 pb-2">
      <div className="flex flex-col  md:flex-row gap-4 w-full h-full mt-[50px]">
        {/* 사진 영역 */}
        <div
          ref={downloadDivRef}
          className="flex items-center justify-center w-full md:w-[280px] h-fit bg-gray-50 p-4 rounded-lg shadow-md"
        >
          <PhotoFrame />
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
