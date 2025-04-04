import { toastImg } from '@/assets/imgs';
import { Filter } from '@/constants/filter';

interface Props {
  photo: string | null;
  filter: string;
}

const ToastFrameCut = ({ photo, filter }: Props) => {
  return (
    <div className="relative w-[250px]">
      <img src={toastImg} width={250} />
      {photo && (
        <img
          src={photo}
          key={`Captured-${photo}`}
          alt={`Captured-${photo}`}
          className={`absolute transform -scale-x-100 z-20 rounded-l top-15 left-6`}
          style={{
            filter: Filter[filter],
          }}
          width="200"
          height="112"
        />
      )}
    </div>
  );
};

export default ToastFrameCut;
