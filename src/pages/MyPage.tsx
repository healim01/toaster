import useUserContext from '@/hooks/useUserContext';

export const MyPage = () => {
  const { user } = useUserContext();
  return (
    <div className="flex relative w-full md:h-[92vh] pt-2 pb-2 mt-[50px]">
      MyPage 안녕하세요 {user?.name} 님!
    </div>
  );
};
