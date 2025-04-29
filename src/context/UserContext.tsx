import { getUserInfo, supabaseClient } from '@/service/supabase';
import { User } from '@/types/user';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUserInfo = async () => {
    try {
      const profile = await getUserInfo();
      setUser(profile);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    const { data: listener } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) setUser(null);
        else fetchUserInfo();
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
