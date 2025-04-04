import { toastImg } from '@/assets/imgs';
import { useFilterContext } from '@/hooks';

interface Props {
  photo: string | null;
}

const ToastFrameCut = ({ photo }: Props) => {
  const { filter } = useFilterContext();

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
            filter: filter?.filterStyle,
          }}
          width="200"
          height="112"
        />
      )}
    </div>
  );
};

export default ToastFrameCut;
