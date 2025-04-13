import { Error404Img } from '@/assets';
import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate } from '@/hooks';

const NotFoundPage = () => {
  const navigate = useEventNavigate();

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <img src={Error404Img} className="w-50" />
      <h1 className="text-9xl font-bold text-blue-400 mb-4 animate__animated animate__fadeIn">
        404
      </h1>
      <p className="text-xl text-blue-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
        페이지를 찾을 수 없습니다 😢
      </p>
      <Button
        label="홈으로 돌아가기"
        onClick={() => navigate(ROUTE_PATH.start)}
        round
        size="medium"
      />
    </div>
  );
};

export default NotFoundPage;
