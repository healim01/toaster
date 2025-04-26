import { GoogleIcon } from '@/assets';

export const GoogleLoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-[300px] max-w-[400px] min-w-min h-12 px-3 bg-gray-100 text-gray-800 rounded transition shadow hover:shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1"
    >
      <div className="flex w-full items-center justify-center">
        <div className="w-5 h-5 mr-3">
          <GoogleIcon />
        </div>
        <span className="font-medium truncate font-body">
          Sign in with Google
        </span>
      </div>
    </button>
  );
};
