import useUserContext from '@/hooks/useUserContext';
import { getElapsedDays } from '@/utils/getElapsedDays';

export const ProfileSection = () => {
  const { user } = useUserContext();

  return (
    <div className="flex flex-row items-center gap-5 w-full h-[120px] bg-amber-100 px-8 py-4 rounded-2xl shadow-sm">
      <div className="w-16 h-16 rounded-full bg-amber-300 flex items-center justify-center text-xl font-bold text-white">
        {user?.name?.[0] || '🙂'}
      </div>

      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-gray-800">
          안녕하세요, {user?.name} 님!
        </span>
        <span className="text-base text-amber-900 mt-1">
          토스터 부스와 함께한지{' '}
          <strong className="text-amber-500">
            {getElapsedDays(user?.created_at ?? '')}일 🧡
          </strong>
        </span>
      </div>
    </div>
  );
};
