import { create } from "zustand";
import { fetchCourses } from "@/actions/courses";

interface CoursesState {
  courses: {
    data: Course[] | null;
    loading: boolean;
    error: boolean;
  };
  fetchCourses: (filter: Filter) => Promise<void>;
  resetCourses: () => void;
}

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: {
    data: null,
    loading: false,
    error: false,
  },
  fetchCourses: async (filter: Filter) => {
    set((state) => ({
      courses: { ...state.courses, loading: true, error: false },
    }));

    const result = await fetchCourses(filter);

    setTimeout(() => {
      set({
        courses: { data: result, loading: false, error: !result.length },
      });
    }, 1500);
  },
  resetCourses: () => {
    set({
      courses: {
        data: null,
        loading: false,
        error: false,
      },
    });
  },
}));
