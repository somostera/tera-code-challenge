type Category = string;

type Level = string;

interface Module {
  title: string;
  lessons: number;
}

interface Course {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: Category;
  level: Level;
  duration_hours: number;
  modules: Moduleee[];
}
