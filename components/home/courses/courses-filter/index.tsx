"use client";
import Select from "@/components/common/select";
import { useFilters } from "@/hooks/useFilters";

export default function CoursesFilter() {
  const { categories, levels, category, level, handleFilter } = useFilters();

  return (
    <>
      {!!categories?.data?.length && (
        <Select
          options={categories.data}
          value={category}
          label="CATEGORIA"
          onChange={(option: string) =>
            handleFilter({ category: option, level })
          }
        />
      )}
      {!!levels?.data?.length && (
        <Select
          options={levels.data}
          value={level}
          label="DIFICULDADE"
          onChange={(option: string) =>
            handleFilter({ category, level: option })
          }
        />
      )}
    </>
  );
}
