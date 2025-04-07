export type Module = {
    title: string;
    lessons: number;
  };
  
  export type Course = {
    id: number;
    title: string;
    short_description: string;
    category: string;
    level: string;
    duration_hours: number;
    modules: Module[];
  };
  