import { SignIn } from '@/components/rive/tempRive';

const RivePage = () => {
  //   const { rive, RiveComponent } = useRive({
  //     src: 'https://cdn.rive.app/animations/vehicles.riv',
  //     stateMachines: 'bumpy',
  //     autoplay: false,
  //   });

  const checkUser = (user: string, pass: string) => {
    return user === 'user' && pass === 'password';
  };

  return (
    <div className="block w-[800px] h-[800px]">
      <SignIn checkLogin={checkUser} />
    </div>
  );
};

export default RivePage;
