import { toastImg } from '@/assets';

interface Props {
  photo: string | null;
}

const ToastFrameCut = ({ photo }: Props) => {
  return (
    <div className="relative w-[260px]">
      <img src={toastImg} width={260} />
      {photo && (
        <div className="w-[200px] aspect-[16/9] absolute transform scale-x-[-1] z-10 top-15 left-8">
          <img
            src={photo}
            key={`Captured-${photo}`}
            alt={`Captured-${photo}`}
            className={`object-cover rounded-xl`}
          />
        </div>
      )}
    </div>
  );
};

export default ToastFrameCut;
