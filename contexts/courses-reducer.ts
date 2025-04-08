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
        filteredCourses: [
          ...state.initialCourses.filter((course) =>
            filterByText(course.title, action.payload.search)
          ),
        ],
      };
    }
    default: {
      return { ...state };
    }
  }
}

function filterByText(baseText: string, filterTerm: string) {
  return baseText.toLocaleLowerCase().includes(filterTerm.toLowerCase());
}
