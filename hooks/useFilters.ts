import fetchCategories from "@/actions/categories";
import fetchLevels from "@/actions/levels";
import { changeParams } from "@/utils/change-params";
import { useEffect, useState, useTransition } from "react";

export const useFilters = () => {
  const [isCategoriesLoading, startCategoriesTransition] = useTransition();
  const [isLevelsLoading, startLevelsTransition] = useTransition();
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [levels, setLevels] = useState<Level[] | null>(null);

  const handleFetchCategories = async () => {
    startCategoriesTransition(async () => {
      const result = await fetchCategories();
      setCategories(result);
    });
  };

  const handleFetchLevels = async () => {
    startLevelsTransition(async () => {
      const result = await fetchLevels();
      setLevels(result);
    });
  };

  const handleFilter = (newFilter: Filter) => changeParams({ ...newFilter });

  useEffect(() => {
    handleFetchCategories();
    handleFetchLevels();
  }, []);

  return {
    categories,
    levels,
    isCategoriesLoading,
    isLevelsLoading,
    handleFilter,
  };
};
