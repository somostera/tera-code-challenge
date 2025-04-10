export type Params = {
  search: string;
  category: string;
  level: string;
};

export function updateSearchParamsWithoutReload(
  pathname: string,
  params: Params
) {
  const { search, level, category } = params;

  const newParams = new URLSearchParams();
  if (search) {
    newParams.set("search", search);
  }

  if (category) {
    newParams.set("category", category);
  }

  if (level) {
    newParams.set("level", level);
  }

  window.history.replaceState({}, "", `${pathname}?${newParams.toString()}`);
}
