import { LoginTextImg, MyPageTextImg } from '@/assets';
import Modal from '@/components/_common/Modal/Modal';
import { GoogleLoginButton } from '@/components/Login/GoogleLoginButton';
import { useEventNavigate } from '@/hooks';
import useUserContext from '@/hooks/useUserContext';
import { supabaseClient } from '@/service/supabase';
import { useState } from 'react';

const LoginSection = () => {
  const navigate = useEventNavigate();
  const { user } = useUserContext();
  const [open, setOpen] = useState(false);

  const handleLogin = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}`,
      },
    });
  };

  if (user) {
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
  }

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <img
          src={LoginTextImg}
          width={100}
          alt="Login"
          className="hover:drop-shadow-lg hover:drop-shadow-gray-300"
        />
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="w-[300px] md:w-[400px] gap-5 flex flex-col items-center rounded-2xl p-6 shadow-md">
          <h2 className="text-3xl font-bold text-brown-700 text-center">
            로그인하고 <br />
            추억을 저장하세요!
          </h2>
          <p className="text-center text-brown-500 text-2xl">
            사진 저장, 갤러리 기능을 이용하려면
            <br />
            로그인이 필요해요
          </p>

          <GoogleLoginButton onClick={handleLogin} />
        </div>
      </Modal>
    </>
  );
};

export default LoginSection;
