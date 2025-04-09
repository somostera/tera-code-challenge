import { enrollCourse } from "@/actions/course";
import { useState, useTransition } from "react";

export const useEnroll = () => {
  const [loading, startTransition] = useTransition();
  const [enrollSuccess, setEnrollSuccess] = useState<boolean>(false);

  const handleEnrollCourse = async () => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const result = await enrollCourse();
      setEnrollSuccess(result);
    });
  };

  return {
    loading,
    enrollSuccess,
    handleEnrollCourse,
  };
};
