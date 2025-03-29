import { useState } from 'react';

interface Props {
  onClick: () => void;
}

const ToasterLever = ({ onClick }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    onClick();
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 700); // 0.7초 후에 초기 상태로 복귀
  };

  return (
    <div className="flex flex-col items-center justify-center h-48">
      <div
        className={`w-30 h-5 bg-gray-500 rounded-lg transform origin-left transition-transform 
          ${isPressed ? 'duration-700' : 'duration-500'} 
          ${isPressed ? 'rotate-45' : '-rotate-45'}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default ToasterLever;
