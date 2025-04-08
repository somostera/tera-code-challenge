import { ICourse } from "@/models/course";
import { CoursesProviderState, PayloadAction } from "./courses";

export function coursesReducer(
  state: CoursesProviderState,
  action: PayloadAction
): CoursesProviderState {
  switch (action.type) {
    case "set_courses": {
      return {
        ...state,
        initialCourses: [...action.payload.courses],
        filteredCourses: [...action.payload.courses],
      };
    }
    case "set_search": {
      return {
        ...state,
        search: action.payload.search,
        filteredCourses: pipeFilters(
          state.initialCourses,
          action.payload.search,
          state.filterByCategory,
          state.filterByLevel
        ),
      };
    }
    case "set_category_filter": {
      return {
        ...state,
        filterByCategory: action.payload.category,
        filteredCourses: pipeFilters(
          state.initialCourses,
          state.search,
          action.payload.category,
          state.filterByLevel
        ),
      };
    }
    case "set_level_filter": {
      return {
        ...state,
        filterByLevel: action.payload.level,
        filteredCourses: pipeFilters(
          state.initialCourses,
          state.search,
          state.filterByCategory,
          action.payload.level
        ),
      };
    }
    default: {
      return { ...state };
    }
  }
}

function pipeFilters(
  initialCourses: ICourse[],
  search: string,
  category: string,
  level: string
) {
  return initialCourses
    .filter((course) =>
      course.title.toLocaleLowerCase().includes(search.toLowerCase())
    )
    .filter((course) =>
      course.category.toLowerCase().includes(category.toLowerCase())
    )
    .filter((course) =>
      course.level.toLowerCase().includes(level.toLowerCase())
    );
}
