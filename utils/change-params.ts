export const changeParams = (
  queryParams: Record<string, string | number | boolean | null | undefined>
) => {
  const filteredParams = Object.entries(queryParams)
    .filter(
      ([, value]) => value !== null && value !== undefined && value !== ""
    )
    .reduce((acc: Record<string, string | number | boolean>, [key, value]) => {
      if (value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

  const queryString = Object.entries(filteredParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .filter(Boolean)
    .join("&");

  const newUrl = queryString ? `?${queryString}` : window.location.pathname;
  const isValidUrl = newUrl !== "?";

  if (!isValidUrl) {
    return window.history.pushState(null, "", "/");
  }

  window.history.pushState(null, "", newUrl);
};
