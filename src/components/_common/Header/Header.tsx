import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-center h-[60px] w-full z-10">
      <div className="flex items-center w-5xl h-full bg-amber-200">
        <Link to={ROUTE_PATH.takePhoto}>
          <Button label="toaster" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
