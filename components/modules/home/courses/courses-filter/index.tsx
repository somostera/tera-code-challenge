"use client";

import { motion } from "framer-motion";
import Select from "@/components/common/select";
import { useFilters } from "@/hooks/useFilters";
import Skeleton from "@/components/common/skeleton";

const Placeholder = () => (
  <div>
    <Skeleton className="h-5 w-20 mb-2" />
    <Skeleton className="h-12 w-64" />
  </div>
);

interface CoursesFilterProps {
  loading: boolean;
}

const CoursesFilter = ({ loading }: CoursesFilterProps) => {
  const { categories, levels, category, level, handleFilter } = useFilters();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "linear" }}
      className="flex items-center justify-center md:justify-start flex-wrap pb-6 gap-7"
    >
      {categories.loading || !categories?.data?.length ? (
        <Placeholder />
      ) : (
        <Select
          options={categories.data}
          value={category}
          disabled={loading}
          label="CATEGORIA"
          dataCy="category"
          onChange={(option: string) =>
            handleFilter({ category: option, level })
          }
        />
      )}
      {levels.loading || !levels?.data?.length ? (
        <Placeholder />
      ) : (
        <Select
          options={levels.data}
          value={level}
          disabled={loading}
          label="DIFICULDADE"
          dataCy="level"
          onChange={(option: string) =>
            handleFilter({ category, level: option })
          }
        />
      )}
    </motion.div>
  );
};

export default CoursesFilter;
