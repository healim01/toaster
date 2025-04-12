import { useLocation, useNavigate } from 'react-router-dom';

const useEventNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (to: string) => {
    const query = new URLSearchParams(location.search);
    const event = query.get('eventId');

    if (event) {
      const withEvent = `${to}?eventId=${event}`;
      navigate(withEvent);
    } else {
      navigate(to);
    }
  };
};

export default useEventNavigate;
