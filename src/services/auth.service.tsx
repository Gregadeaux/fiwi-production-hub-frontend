import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { AuthError, AuthResponse, AuthTokenResponsePassword, Session } from '@supabase/supabase-js';

export interface SessionProviderInterface {
  session: Session | null;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signIn: (email: string, password: string) => Promise<AuthTokenResponsePassword>;
  signOut: () => Promise<{ error: AuthError | null }>;
  getSession: () => Promise<any>;
}

export const SessionContext = createContext<SessionProviderInterface | null>(null);
export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      console.log('SESSION EVENT', event, session);
      if (event === 'SIGNED_OUT') {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  const sessionObject = {
    session,
    signUp,
    signIn,
    signOut,
    getSession,
  };

  return <SessionContext.Provider value={sessionObject}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  return useContext(SessionContext) as SessionProviderInterface;
};

const signUp = (email: string, password: string): Promise<AuthResponse> => {
  return supabase.auth.signUp({
    email,
    password,
  });
};

const signIn = (email: string, password: string): Promise<AuthTokenResponsePassword> => {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};

const signOut = (): Promise<{ error: AuthError | null }> => {
  return supabase.auth.signOut();
};

const getSession = () => {
  return supabase.auth.getSession();
};
