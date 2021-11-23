export interface Organisation {
  id: number;
  name: string;
}

export interface AppContext {
  organisations: Organisation[];
}
