import { LoginSection } from '@/components/Login/LoginSection';
import { MypageButton } from '@/components/Login/MypageButton';
import useUserContext from '@/hooks/useUserContext';

export const AuthSection = () => {
  const { user } = useUserContext();

  return user ? <MypageButton /> : <LoginSection />;
};
