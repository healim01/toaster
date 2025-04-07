import { toastImg } from '@/assets/imgs';

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
          className={`absolute transform -scale-x-100 z-10 rounded-l top-15 left-8.5`}
          width="200"
          height="112"
        />
      )}
    </div>
  );
};

export default ToastFrameCut;
