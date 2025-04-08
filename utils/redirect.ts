export const redirectWithoutRefresh = (
  queryParams: Record<string, string | number | boolean>
) => {
  const queryString = Object.entries(queryParams)
    .map(
      ([key, value]) =>
        value && `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const newUrl = queryString ? `?${queryString}` : window.location.pathname;

  window.history.pushState(null, "", newUrl);
};
