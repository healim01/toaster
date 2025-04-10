import { toastImg } from '@/assets';

interface Props {
  photo: string | null;
}

const ToastFrameCut = ({ photo }: Props) => {
  return (
    <div className="relative w-[260px] aspect-[16/9]">
      <img src={toastImg} className="absolute inset-0 w-full h-full z-20" />
      {photo && (
        <img
          src={photo}
          key={`Captured-${photo}`}
          alt={`Captured-${photo}`}
          className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1] z-10 rounded-xl"
        />
      )}
    </div>
  );
};

export default ToastFrameCut;
