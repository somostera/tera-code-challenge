"use client";

import Icon from "@/components/common/icon";
import { getLessonsNumber } from "@/utils/get-lessons-number";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEnroll } from "@/hooks/useEnroll";
import { LEVELS } from "@/constants/levels";

interface EnrollCourseProps {
  course: Course;
}

const EnrollCourse = ({ course }: EnrollCourseProps) => {
  const { loading, enrollSuccess, handleEnrollCourse } = useEnroll();

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:mt-[-300px]">
        <Image
          src={`/images/courses/${course.id}.jpg`}
          alt={course.title}
          className="w-full"
          width={200}
          height={100}
        />
        <div className="pt-6 pb-10 px-12">
          <h3 className="text-xl text-blue-950 font-semibold mb-2">
            {course.title}
          </h3>
          <p className="text-md text-gray-500 mb-3">
            {course.short_description}
          </p>
          <div className="flex items-center justify-between py-3 gap-4 border-b border-b-gray-300">
            <div className="flex items-center gap-2">
              <Icon name="lessons" className="w-5 h-5 text-emerald-500" />
              <span className="text-blue-950 text-md font-semibold">
                Duração
              </span>
            </div>
            <span className="text-gray-500 text-md">
              {course.duration_hours} horas
            </span>
          </div>
          <div className="flex items-center justify-between py-3 gap-4 border-b border-b-gray-300">
            <div className="flex items-center gap-2">
              <Icon name="lessons" className="w-5 h-5 text-emerald-500" />
              <span className="text-blue-950 text-md font-semibold">
                Módulos
              </span>
            </div>
            <span className="text-gray-500 text-md">
              {course.modules.length}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 gap-4 border-b border-b-gray-300">
            <div className="flex items-center gap-2">
              <Icon name="lessons" className="w-5 h-5 text-emerald-500" />
              <span className="text-blue-950 text-md font-semibold">Aulas</span>
            </div>
            <span className="text-gray-500 text-md">
              {getLessonsNumber(course)}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-2">
              <Icon name="lessons" className="w-5 h-5 text-emerald-500" />
              <span className="text-blue-950 text-md font-semibold">
                Dificuldade
              </span>
            </div>
            <span className="text-gray-500 text-md capitalize">
              {LEVELS[course.level]}
            </span>
          </div>
          <button
            data-cy="enroll"
            onClick={handleEnrollCourse}
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-200 text-gray-600"
                : "bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer"
            } text-lg font-semibold rounded-md py-3 px-8 mt-5 w-full transition`}
          >
            {loading ? "Aguarde..." : "MATRICULAR"}
          </button>
        </div>
      </div>

      {enrollSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl max-w-sm w-full px-8 py-10 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 rounded-full p-3">
                <Icon name="checkDouble" className="w-8 h-8 text-emerald-500" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-950 mb-2">
              Matrícula realizada com sucesso!
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Você foi matriculado no curso com sucesso. Agora é só acessar o
              conteúdo e começar seus estudos.
            </p>
            <Link href="/">
              <button className="w-full bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white font-semibold py-3 rounded-md transition-colors">
                Voltar para a página inicial
              </button>
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default EnrollCourse;
