import { getNotice } from '@/service/supabase';
import { Notice } from '@/types/notice';
import { useQuery } from '@tanstack/react-query';

const useGetNoticeQuery = () => {
  const {
    data: notice,
    isLoading,
    isError,
  } = useQuery<Notice>({
    queryKey: ['notice'],
    queryFn: getNotice,
    enabled: true,
    staleTime: 1000 * 60,
  });

  return { notice, isLoading, isError };
};

export default useGetNoticeQuery;
