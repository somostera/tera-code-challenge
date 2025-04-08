import { create } from "zustand";
import fetchCourses from "@/actions/courses";

interface CoursesState {
  courses: {
    data: Course[] | null;
    loading: boolean;
  };
  fetchCourses: (filter: Filter) => Promise<void>;
}

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: {
    data: null,
    loading: false,
  },
  fetchCourses: async (filter: Filter) => {
    set((state) => ({ courses: { ...state.courses, loading: true } }));

    const result = await fetchCourses(filter);

    set({ courses: { data: result, loading: false } });
  },
}));
