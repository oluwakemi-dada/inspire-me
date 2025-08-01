import type { Idea, NewIdea } from '@/types';
import api from '@/lib/axios';

export const fetchIdeas = async (): Promise<Idea[]> => {
  const res = await api.get('/ideas');
  return res.data;
};

export const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const res = await api.get(`/ideas/${ideaId}`);
  return res.data;
};

export const createIdea = async (newIdea: NewIdea): Promise<Idea> => {
  const res = await api.post('/ideas', {
    ...newIdea,
    createdAt: new Date().toISOString(),
  });

  return res.data;
};
