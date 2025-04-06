import { GithubIcon, InstagramIcon } from '@/assets';
import { ROUTE_PATH } from '@/constants/routePath';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className={`flex flex-col justify-end w-full text-sm text-white mt-20
      ${
        location.pathname === ROUTE_PATH.takePhoto
          ? 'bg-yellow-500'
          : 'bg-blue-100'
      }
    `}
    >
      <div className="flex flex-col md:flex-row w-full justify-between md:items-end px-6 py-8 gap-6 md:gap-0 bg-blue-300">
        <div className="flex flex-col gap-2">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <p>TOASTER</p>
            <p>BOOTH</p>
          </div>
          <p className="italic text-base sm:text-lg">
            Snap. Slice. Save. Your moment, toasted.
          </p>
        </div>

        <div className="flex flex-col h-full gap-2 items-start md:items-end">
          <div className="flex gap-4">
            <a
              href="https://instagram.com/healim01"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://github.com/healim01/toaster"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
          <p className="text-xs sm:text-sm break-all">
            Contact: HyelimChoi01@gmail.com
          </p>
          <p className="text-xs sm:text-sm">
            Cooked with JavaScript, served with love
          </p>
          <p className="text-xs sm:text-sm">
            © 2025 toaster booth. Made with ☕️ by Hailey & River
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
