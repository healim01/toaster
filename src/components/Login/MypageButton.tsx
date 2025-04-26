import { MyPageTextImg } from '@/assets';
import { useEventNavigate } from '@/hooks';

export const MypageButton = () => {
  const navigate = useEventNavigate();

  return (
    <div onClick={() => navigate('/mypage')} className="cursor-pointer">
      <img
        src={MyPageTextImg}
        width={140}
        alt="My Page"
        className="hover:drop-shadow-lg hover:drop-shadow-gray-300"
      />
    </div>
  );
};
