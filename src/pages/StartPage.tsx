import {
  IntroSection,
  MarqueeSection,
  StepSection,
} from '@/components/landing';
import { useTrackPageView } from '@/service/amplitude';

const StartPage = () => {
  useTrackPageView({ eventName: '[View] toaster booth 시작 페이지' });

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen md:gap-30">
      {/* 토스터 부스 설명 */}
      <IntroSection />

      {/* 스탭 별 상세 설명 */}
      <div className="flex flex-col">
        <StepSection />
      </div>

      {/* 마퀴 섹션 */}
      <MarqueeSection />
    </div>
  );
};

export default StartPage;
