import { createContext, useState, PropsWithChildren } from 'react';

type PhotosContextType = {
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PhotosContext = createContext<PhotosContextType | undefined>(
  undefined,
);

export const PhotosProvider = ({ children }: PropsWithChildren) => {
  const [photos, setPhotos] = useState<string[]>([]);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};
