import { useCallback } from "react";

export const useSearch = (name) => {
  const search = useCallback(
    (recipes) =>
      recipes.filter((recipe) =>
        recipe.name.toLowerCase().startsWith(name.toLowerCase())
      ),
    [name]
  );
  return search;
};
