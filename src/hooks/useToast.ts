import { ToastContext } from '@/context/ToastContext';
import { useContext } from 'react';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
};
