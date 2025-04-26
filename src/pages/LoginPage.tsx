import { Button } from '@/components';
import useUserContext from '@/hooks/useUserContext';
import { supabaseClient } from '@/service/supabase';

const LoginButton = () => {
  const handleLogin = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/login`,
      },
    });
  };

  return <Button label="구글로 로그인" onClick={handleLogin} />;
};

const LoginPage = () => {
  const { user } = useUserContext();

  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full h-screen">
      {user ? (
        <p>
          반가워요, {user.name}님! ({user.email})
        </p>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default LoginPage;
