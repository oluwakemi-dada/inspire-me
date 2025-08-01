export type Idea = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  createdAt: string;
  user: string;
};

export type NewIdea = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
};

export type UpdateIdea = NewIdea;
export type UpdateMutation = UpdateIdea & {
  ideaId: string;
};
