"use client";

import { ICourse } from "@/models/course";
import {
  createContext,
  PropsWithChildren,
  use,
  useReducer,
  type Dispatch,
} from "react";
import { coursesReducer } from "@/contexts/courses-reducer";
import { pipeFilters } from "@/utils/pipe-filters";

export type PayloadAction =
  | {
      type: "set_courses";
      payload: { courses: ICourse[] };
    }
  | { type: "set_search"; payload: { search: string } }
  | { type: "set_category_filter"; payload: { category: string } }
  | { type: "set_level_filter"; payload: { level: string } };

export type CoursesProviderProps = {
  courses: ICourse[];
  initialCategory: string;
  initialLevel: string;
  initialSearch: string;
};

export type CoursesProviderState = {
  initialCourses: ICourse[];
  filteredCourses: ICourse[];
  search: string;
  filterByCategory: string;
  filterByLevel: string;
};

export const CoursesStateContext = createContext<CoursesProviderState>({
  search: "",
  initialCourses: [],
  filteredCourses: [],
  filterByCategory: "",
  filterByLevel: "",
});
export const CoursesDispatchContext = createContext<Dispatch<PayloadAction>>(
  () => {}
);

export function CoursesProvider({
  courses,
  initialCategory,
  initialLevel,
  initialSearch,
  children,
}: PropsWithChildren<CoursesProviderProps>) {
  const [state, dispatch] = useReducer(coursesReducer, {
    initialCourses: courses,
    filteredCourses: pipeFilters(
      courses,
      initialSearch,
      initialCategory,
      initialLevel
    ),
    filterByCategory: initialCategory,
    filterByLevel: initialLevel,
    search: initialSearch,
  });

  return (
    <CoursesStateContext value={state}>
      <CoursesDispatchContext value={dispatch}>
        {children}
      </CoursesDispatchContext>
    </CoursesStateContext>
  );
}

export function useContextState() {
  return use(CoursesStateContext);
}

export function useContextDispatch() {
  return use(CoursesDispatchContext);
}
