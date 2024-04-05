export const useUpdateUrl = (title: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set("title", title.replace(/ /g, "_").toLowerCase());
  window.history.replaceState({}, "", url.href);
};
