import Button from '@/components/_common/Button/Button';
import { trackComplimentDev } from '@/service/amplitude/trackEvent';
import confetti from 'canvas-confetti';
import { useCallback, useState } from 'react';

const ComplimentDevSection = () => {
  const [isComplimented, setIsComplimented] = useState(false);

  const handleClick = useCallback(() => {
    trackComplimentDev();

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
    setIsComplimented(true);
  }, []);

  return (
    <div className="p-6 text-center rounded-xl border border-gray-200 shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        이 서비스를 만든 개발자, 어땠나요?
      </h2>
      <p className="mb-6 text-gray-600">
        수고한 개발자에게 칭찬 한 마디 해주세요 🙌
      </p>
      {isComplimented ? (
        <p className="text-pink-600 text-xl font-bold">
          감사합니다! 개발자가 힘을 얻었어요 💪💖
        </p>
      ) : (
        <Button
          label="칭찬하기 🎉"
          onClick={handleClick}
          className="bg-yellow-300 hover:bg-yellow-400 text-white text-lg font-bold py-2 px-6 rounded-full transition"
          round
        />
      )}
    </div>
  );
};

export default ComplimentDevSection;
