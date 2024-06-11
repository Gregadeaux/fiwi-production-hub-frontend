import { Session } from '@supabase/auth-js';
import { createContext, useContext } from 'react';
import { supabase } from '../utils/supabase';
import { Team } from './teams.service';

export interface UserProviderInterface {
  createUser: (session: Session, team: Team, name: string) => Promise<void>;
  retrieveFromSession: (session: Session) => Promise<any>;
}

export const UserContext = createContext<UserProviderInterface | null>(null);
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const providerData = {
    createUser,
    retrieveFromSession,
  };
  return <UserContext.Provider value={providerData}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext) as UserProviderInterface;
};

const createUser = async (session: Session, team: Team, name: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      email: session.user.email,
      id: session.user.id,
      name: name,
      team_id: team.id,
    })
    .select();
  console.log(data, error);
};

const retrieveFromSession = async (session: Session) => {
  return supabase.from('profiles').select().eq('id', session.user.id);
};
