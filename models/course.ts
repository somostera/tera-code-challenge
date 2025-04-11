export interface ICourse {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: string;
  level: string;
  duration_hours: number;
  modules: IModule[];
}

export interface IModule {
  title: string;
  lessons: number;
}
