"use client";
import Select from "@/components/common/select";
import { useFilters } from "@/hooks/useFilters";

interface CoursesFilterProps {
  category: Category;
  level: Level;
}

export default function CoursesFilter({ category, level }: CoursesFilterProps) {
  const { categories, levels, handleFilter } = useFilters();

  return (
    <>
      {!!categories?.length && (
        <Select
          options={categories}
          value={category}
          label="CATEGORY"
          onChange={(option: string) =>
            handleFilter({ category: option, level })
          }
        />
      )}
      {!!levels?.length && (
        <Select
          options={levels}
          value={level}
          label="LEVEL"
          onChange={(option: string) =>
            handleFilter({ category, level: option })
          }
        />
      )}
    </>
  );
}
