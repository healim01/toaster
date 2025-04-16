import { createContext, PropsWithChildren, useState } from 'react';

type FrameContextType = {
  frame: string;
  setFrame: (frame: string) => void;
};

export const FrameContext = createContext<FrameContextType | undefined>(
  undefined,
);

export const FrameProvider = ({ children }: PropsWithChildren) => {
  const [frame, setFrame] = useState<string>('오리지널 토스트');

  return (
    <FrameContext.Provider value={{ frame, setFrame }}>
      {children}
    </FrameContext.Provider>
  );
};
