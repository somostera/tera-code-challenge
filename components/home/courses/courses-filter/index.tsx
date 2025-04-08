"use client";
import { motion } from "framer-motion";
import Select from "@/components/common/select";
import { useFilters } from "@/hooks/useFilters";

export default function CoursesFilter() {
  const { categories, levels, category, level, handleFilter } = useFilters();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "linear" }}
      className="flex items-center py-6 gap-7"
    >
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
    </motion.div>
  );
}
