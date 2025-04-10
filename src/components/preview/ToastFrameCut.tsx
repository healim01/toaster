import { toastImg } from '@/assets';

interface Props {
  photo: string | null;
}

const ToastFrameCut = ({ photo }: Props) => {
  return (
    <div className="relative w-[260px]">
      <img src={toastImg} width={260} />
      {photo && (
        <img
          src={photo}
          key={`Captured-${photo}`}
          alt={`Captured-${photo}`}
          className={`absolute transform z-10 rounded-xl top-15 left-8 object-cover`}
          width="200"
          height="112"
        />
      )}
    </div>
  );
};

export default ToastFrameCut;
