import { createContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { Tables } from '../database.types';
import { PostgrestMaybeSingleResponse } from '@supabase/supabase-js';

interface TeamsProviderInterface {
  teams: Team[];
  refresh: () => Promise<void>;
}

export type Team = Tables<'teams'>;
export const TeamsContext = createContext<TeamsProviderInterface | null>(null);
export const TeamsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    getTeams().then(({ data }) => {
      if (data) setTeams(data);
    });
  }, []);

  const refresh = async () => {
    const { data } = await getTeams();
    if (data) setTeams(data);
  };

  const teamsObject = {
    teams,
    refresh,
  };

  return <TeamsContext.Provider value={teamsObject}>{children}</TeamsContext.Provider>;
};

const getTeams: () => Promise<PostgrestMaybeSingleResponse<Team[]>> = async () => {
  return await supabase.from('teams').select();
};
