interface Module {
  title: string;
  lessons: number;
}

interface Course {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: string;
  level: string;
  duration_hours: number;
  modules: Moduleee[];
}
