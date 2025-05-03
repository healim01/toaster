import { CloseIcon } from '@/assets';
import { ReactNode, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl p-6 shadow-lg w-fit max-w-2xl mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4
             bg-white border border-gray-300 rounded-full 
             w-10 aspect-square flex items-center justify-center 
             shadow-lg hover:shadow-xl transition"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
