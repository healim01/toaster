import { useEffect, useState } from 'react';

interface Props {
  topPosition?: 'top' | 'right';
  message?: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

const ToastMessage = ({
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

  return (
    <div
      className={`fixed z-50 px-4 py-2 rounded-xl shadow-xl text-white text-sm
        bg-black/50 backdrop-blur-md
        transition-opacity duration-300 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0'}
        ${positionClass}
        ${className ?? ''}
        `}
    >
      {message}
    </div>
  );
};

export default ToastMessage;
