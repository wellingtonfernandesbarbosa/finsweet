export const useUpdateMetaOGDescription = (text: string) => {
  const metaOGDescriptionTag = document.querySelector("meta[property='og:description']");
  if (metaOGDescriptionTag) metaOGDescriptionTag.setAttribute("content", text);
};

