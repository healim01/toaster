import { LoginTextImg } from '@/assets';
import { Modal } from '@/components';
import { GoogleLoginButton } from '@/components/Login/GoogleLoginButton';
import { supabaseClient } from '@/service/supabase';
import { useState } from 'react';

export const LoginSection = () => {
  const [open, setOpen] = useState(false);

  const handleLogin = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}`,
      },
    });
  };

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
