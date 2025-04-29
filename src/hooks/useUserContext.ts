import { UserContext } from '@/context';
import { useContext } from 'react';

export const useUserContext = () => {
  const state = useContext(UserContext);
  if (!state) throw new Error('UserProvider not found');

  const { user, setUser } = state;
  return { user, setUser };
};
