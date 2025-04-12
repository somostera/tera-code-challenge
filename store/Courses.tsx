"use client";

import { create } from "zustand";
import { Course } from "@/types";
import { getCourses } from "@/actions/getCourses";

type CoursesState = {
  courses: Course[];
  filteredCourses: Course[];
  search: string;
  category: string;
  level: string;
  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  setLevel: (value: string) => void;
  fetchCourses: () => Promise<void>;
  filterCourses: () => void;
};

export const useCoursesStore = create<CoursesState>((set, get) => ({
  courses: [],
  filteredCourses: [],
  search: "",
  category: "",
  level: "",

  fetchCourses: async () => {
    const data = await getCourses();
    set({ courses: data.courses, filteredCourses: data.courses });
  },

  filterCourses: () => {
    const { courses, search, category, level } = get();
    const filtered = courses.filter((course) => {
      return (
        course.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || course.category === category) &&
        (level === "" || course.level === level)
      );
    });
    set({ filteredCourses: filtered });
  },

  setSearch: (value: string) => {
    set({ search: value });
    get().filterCourses();
  },

  setCategory: (value: string) => {
    set({ category: value });
    get().filterCourses();
  },

  setLevel: (value: string) => {
    set({ level: value });
    get().filterCourses();
  },

}));
