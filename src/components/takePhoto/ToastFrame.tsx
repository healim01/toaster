import { toastImg } from '@/assets/imgs';
import { Filter } from '@/constants/filter';

interface Props {
  photo: string;
  filter: string;
}

const ToastFrame = ({ photo, filter }: Props) => {
  return (
    <div className="relative w-[250px]">
      <img src={toastImg} width={250} />
      <img
        src={photo}
        key={`Captured-${photo}`}
        alt={`Captured-${photo}`}
        className={`absolute transform -scale-x-100 z-20 rounded-l top-12 left-8`}
        style={{
          filter: Filter[filter],
        }}
        width="180"
      />
    </div>
  );
};

export default ToastFrame;
