import { useFilterStore } from "@/store/filter-store";
import { changeParams } from "@/utils/change-params";
import { useEffect } from "react";

export const useFilters = () => {
  const {
    category,
    level,
    categories,
    levels,
    setCategory,
    setLevel,
    fetchCategories,
    fetchLevels,
  } = useFilterStore();

  const handleFilter = (newFilter: Filter) => {
    setCategory(newFilter.category);
    setLevel(newFilter.level);
    changeParams({ category: newFilter.category, level: newFilter.level });
  };

  useEffect(() => {
    fetchCategories();
    fetchLevels();
  }, []);

  return {
    categories,
    levels,
    category,
    level,
    handleFilter,
  };
};
