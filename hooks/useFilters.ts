import { useFilterStore } from "@/store/filter-store";
import { changeParams } from "@/utils/change-params";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useFilters = () => {
  const searchParams = useSearchParams();

  const {
    category,
    level,
    categories,
    levels,
    setCategory,
    setLevel,
    fetchCategories,
    fetchLevels,
    resetFilters,
  } = useFilterStore();

  const handleFilter = (newFilter: Filter) => {
    setCategory(newFilter.category);
    setLevel(newFilter.level);
    changeParams({ category: newFilter.category, level: newFilter.level });
  };

  const handleResetFilters = useCallback(() => {
    resetFilters();
  }, [resetFilters]);

  useEffect(() => {
    const category = searchParams.get("category");
    const level = searchParams.get("level");

    if (!category && !level) {
      handleResetFilters();
    }

    if (category) setCategory(category);
    if (level) setLevel(level);
  }, [searchParams, setCategory, setLevel, handleResetFilters]);

  useEffect(() => {
    if (!categories.data?.length) fetchCategories();
  }, [fetchCategories, categories.data]);

  useEffect(() => {
    if (!levels.data?.length) fetchLevels();
  }, [fetchLevels, levels.data]);

  return {
    categories,
    levels,
    category,
    level,
    handleFilter,
  };
};
