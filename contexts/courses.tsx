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

export type PayloadAction =
  | {
      type: "set_courses";
      payload: { courses: ICourse[] };
    }
  | { type: "set_search"; payload: { search: string } };

export type CoursesProviderProps = {
  courses: ICourse[];
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
  children,
}: PropsWithChildren<CoursesProviderProps>) {
  const [state, dispatch] = useReducer(coursesReducer, {
    initialCourses: courses,
    filteredCourses: courses,
    filterByCategory: "",
    filterByLevel: "",
    search: "",
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
