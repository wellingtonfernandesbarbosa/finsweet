import { useUpdateMetaDescription } from "./useUpdateMetaDescription";
import { useUpdateMetaOGDescription } from "./useUpdateMetaOGDescription";

export const useResetMetaTags = () => {
  const updateMetaOGDescription = useUpdateMetaOGDescription;
  updateMetaOGDescription("A church that saves lives through the word of God");

  const updateMetaDescription = useUpdateMetaDescription;
  updateMetaDescription("A church that saves lives through the word of God");
};
