import { PropsWithChildren, createContext, useState } from 'react';
import { ToastMessage, ToastMessageType } from '@/components';

interface ToastContextValue {
  showToast: (type: ToastMessageType, message: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toast, setToast] = useState<{
    type: ToastMessageType;
    message: string;
  } | null>(null);

  const showToast = (type: ToastMessageType, message: string) => {
    setToast({ type, message });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <ToastMessage
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
};
