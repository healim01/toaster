import { CheckIcon, CloseIcon, InfoIcon } from '@/assets';
import { useEffect, useState } from 'react';

interface Props {
  type?: 'success' | 'error' | 'info';
  topPosition?: 'top' | 'right';
  message?: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

export const ToastMessage = ({
  type = 'info',
  topPosition = 'top',
  duration = 3000,
  message,
  onClose,
  className,
}: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const positionClass =
    topPosition === 'top'
      ? 'top-10 left-1/2 -translate-x-1/2'
      : 'top-1/2 right-10 -translate-y-1/2 rotate-90 origin-right';

  const icon = {
    success: <CheckIcon width={20} height={20} />,
    error: <CloseIcon color="white" width={15} height={15} />,
    info: <InfoIcon width={20} height={20} />,
  };

  const backgroundColor = {
    success: 'bg-green-400',
    error: 'bg-red-400',
    info: 'bg-blue-400',
  };

  return (
    <div
      className={`fixed z-50 px-6 py-3 rounded-xl shadow-xl text-white text-sm flex items-center gap-3
        bg-black/50 backdrop-blur-md
        transition-opacity duration-300 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0'}
        ${positionClass}
        ${className ?? ''}
        font-body
        `}
    >
      <div
        className={`flex items-center justify-center ${backgroundColor[type]} w-[24px] h-[24px] rounded-4xl`}
      >
        {icon[type]}
      </div>
      {message}
    </div>
  );
};
