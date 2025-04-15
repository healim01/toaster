import { loadPhotos, savePhotos } from '@/utils/photoStorage';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

type PhotosContextType = {
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PhotosContext = createContext<PhotosContextType | undefined>(
  undefined,
);

export const PhotosProvider = ({ children }: PropsWithChildren) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isRestored, setIsRestored] = useState(false);

  useEffect(() => {
    loadPhotos().then(restored => {
      setPhotos(restored ?? []);
      setIsRestored(true);
    });
  }, []);

  useEffect(() => {
    if (isRestored) {
      savePhotos(photos);
    }
  }, [photos, isRestored]);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};
