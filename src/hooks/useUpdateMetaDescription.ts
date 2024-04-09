export const useUpdateMetaDescription = (text: string) => {
  const metaDescriptionTag = document.querySelector("meta[name='description']");
  if (metaDescriptionTag) metaDescriptionTag.setAttribute("content", text);
};
