import { Photo } from '@/types/photo';
import { getFormatDate } from '@/utils/getFormatDate';

interface Props {
  photo: Photo;
}
export const GalleryItem = ({ photo }: Props) => {
  return (
    <div className="w-fit p-4 rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <img
        src={photo.url}
        alt="user photo"
        className="w-[180px] h-fit object-cover"
      />
      <div className="pt-2">
        <div className="text-sm text-gray-500 text-right">
          {getFormatDate(photo.created_at)}
        </div>
      </div>
    </div>
  );
};
