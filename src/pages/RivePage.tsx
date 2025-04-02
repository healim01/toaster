import { CardholderRive } from '@/components/rive';

const RivePage = () => {
  // const checkUser = (user: string | null, pass: string | null) => {
  //   return user === 'user' && pass === 'password';
  // };

  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="w-[800px] h-[600px]">
        {/* <SignInRive checkLogin={checkUser} /> */}
        <CardholderRive />
      </div>
    </div>
  );
};

export default RivePage;
