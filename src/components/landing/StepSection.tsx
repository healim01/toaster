import { eggToastImg, photoaster, strawberryJamImg } from '@/assets';

const steps = [
  {
    title: '귀여운 토스트와 함께 사진을 찍어보세요!',
    imgSrc: photoaster,
  },
  {
    title: '마음에 드는 잼을 골라 나만의 토스트를 만드세요!',
    imgSrc: strawberryJamImg,
  },
  {
    title: '완성된 네컷 사진을 저장하고 친구들과 공유해요.',
    imgSrc: eggToastImg,
  },
];

const StepSection = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10 px-4 py-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center gap-4 max-w-md"
        >
          <img
            src={step.imgSrc}
            alt={step.title}
            className="w-30 h-30 object-contain rounded-xl"
          />
          <p className="text-lg text-brown-500">{step.title}</p>

          {index !== steps.length - 1 && (
            <div className="w-0 h-0 border-l-20 border-r-20 border-t-[10px] border-l-transparent border-r-transparent border-t-gray-600 mx-auto rounded-2xl" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepSection;
