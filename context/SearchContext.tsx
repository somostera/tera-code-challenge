"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Course } from "@/types";
import { getCourses } from "@/actions/getCourses";

type CoursesContextType = {
  filteredCourses: Course[];
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  level: string;
  setLevel: (value: string) => void;
};

const CoursesContext = createContext({} as CoursesContextType);

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses()
      setCourses(data.courses);
      setFilteredCourses(data.courses);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      return (
        course.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || course.category === category) &&
        (level === "" || course.level === level)
      );
    });
    setFilteredCourses(filtered);
  }, [search, category, level, courses]);

  return (
    <CoursesContext.Provider
      value={{
        filteredCourses,
        search,
        setSearch,
        category,
        setCategory,
        level,
        setLevel,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext);
