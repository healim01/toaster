import {
  IntroSection,
  MarqueeSection,
  StepSection,
} from '@/components/landing';

const StartPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen md:gap-30">
      <IntroSection />

      <div className="flex flex-col">
        <StepSection />
      </div>

      <MarqueeSection />
    </div>
  );
};

export default StartPage;
