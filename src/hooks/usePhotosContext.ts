import { PhotosContext } from '@/context';
import { useContext } from 'react';

const usePhotosContext = () => {
  const state = useContext(PhotosContext);
  if (!state) throw new Error('PhotosProvider not found');

  const { photos, setPhotos } = state;
  return { photos, setPhotos };
};

export default usePhotosContext;
