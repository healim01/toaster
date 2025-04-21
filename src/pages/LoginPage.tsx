import { Button } from '@/components';
import { supabaseClient } from '@/service/supabase';
const LoginButton = () => {
  const handleLogin = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/login`,
      },
    });
    console.log(data, error);
  };

  return <Button label="구글로 로그인" onClick={handleLogin} />;
};
const LoginPage = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full h-screen">
      <LoginButton />
    </div>
  );
};

export default LoginPage;
