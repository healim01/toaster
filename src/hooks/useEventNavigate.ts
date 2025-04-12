import { useLocation, useNavigate } from 'react-router-dom';

const useEventNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (to: string) => {
    const query = new URLSearchParams(location.search);
    const eventId = query.get('eventId');

    if (eventId) {
      const withEvent = `${to}?eventId=${eventId}`;
      navigate(withEvent);
    } else {
      navigate(to);
    }
  };
};

export default useEventNavigate;
