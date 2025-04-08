import { useFilterStore } from "@/store/filter-store";
import { changeParams } from "@/utils/change-params";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

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
  } = useFilterStore();

  const handleFilter = (newFilter: Filter) => {
    setCategory(newFilter.category);
    setLevel(newFilter.level);
    changeParams({ category: newFilter.category, level: newFilter.level });
  };

  useEffect(() => {
    const category = searchParams.get("category");
    const level = searchParams.get("level");

    if (category) setCategory(category);
    if (level) setLevel(level);
  }, [searchParams, setCategory, setLevel]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchLevels();
  }, [fetchLevels]);

  return {
    categories,
    levels,
    category,
    level,
    handleFilter,
  };
};
