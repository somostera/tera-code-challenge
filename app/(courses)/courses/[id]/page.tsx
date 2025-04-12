"use client";

import { motion } from "framer-motion";
import { getCourses } from "@/actions/getCourses";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Course, Module } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { enrol } from "@/actions/enrol";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import { BadgeCheck, Calendar, Clock, Layers, Video } from "lucide-react";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  const userId = 123;

  useEffect(() => {
    async function fetchData() {
      try {
        const { courses } = await getCourses();
        const found = courses.find((c: Course) => c.id === Number(id));
        if (!found) return notFound();
        setCourse(found);
        setLoading(false);
      } catch {
        throw new Error("Erro ao buscar curso");
      }
    }

    fetchData();
  }, [id]);

  function handleEnrol() {
    startTransition(() => {
      enrol(Number(id), userId).then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error("Erro ao matricular-se.");
        }
      });
    });
  }

  return (
    <motion.div
      className='max-w-7xl mx-auto px-4 py-10 min-h-screen gap-10'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <ToastContainer /> 
      <motion.div
        className='flex flex-col md:flex-row gap-8 mb-12 items-start'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className='flex-1'>
          <motion.h1
            className='text-4xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {loading ? <Skeleton width={400} height={42} /> : course?.title}
          </motion.h1>

          <motion.div
            className='flex flex-wrap gap-4 mb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {loading ? (
              <>
                <Skeleton width={120} height={32} />
                <Skeleton width={110} height={32} />
              </>
            ) : (
              <>
                <span className='inline-block bg-blue-200 text-blue-900 dark:bg-blue-300 dark:text-green-950 text-sm px-4 py-1.5 rounded-full shadow-sm'>
                  🎓 Categoria: <strong>{course?.category}</strong>
                </span>
                <span className='inline-block bg-green-200 text-green-900 dark:bg-green-300 dark:text-green-950 text-sm px-4 py-1.5 rounded-full shadow-sm capitalize'>
                  🚀 Nível: <strong>{course?.level}</strong>
                </span>
              </>
            )}
          </motion.div>

          <motion.p
            className='text-gray-800 dark:text-gray-300 text-lg leading-relaxed tracking-wide'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {loading ? <Skeleton count={4} /> : course?.short_description}
          </motion.p>

          {!loading && (
            <motion.div
              className='mt-10 flex justify-center'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <button
                className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition duration-300 shadow-md disabled:opacity-50'
                onClick={handleEnrol}
                disabled={isPending}
                data-cy='enrol-button'
              >
                {isPending ? "Matriculando..." : "Matricule-se"}
              </button>
            </motion.div>
          )}
        </div>

        {!loading && course?.image_url && (
          <motion.div
            className='w-full md:w-[50%] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src={course.image_url}
              alt={course.title}
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
              priority
            />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 border-t border-b border-gray-300 pt-6 pb-6 mb-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className='flex items-center gap-2 text-gray-800 dark:text-white'>
          <Layers className='w-5 h-5 text-green-600' />
          <span>Ilha Completa</span>
        </div>
        <div className='flex items-center gap-2 text-gray-800 dark:text-white'>
          <Clock className='w-5 h-5 text-green-600' />
          <span>+{course?.duration_hours} Horas</span>
        </div>
        <div className='flex items-center gap-2 text-gray-800 dark:text-white'>
          <Video className='w-5 h-5 text-green-600' />
          <span>Aulas Ao Vivo e Gravadas</span>
        </div>
        <div className='flex items-center gap-2 text-gray-800 dark:text-white'>
          <Calendar className='w-5 h-5 text-green-600' />
          <span>Acesso 12 meses</span>
        </div>
        <div className='flex items-center gap-2 text-gray-800 dark:text-white'>
          <BadgeCheck className='w-5 h-5 text-green-600' />
          <span>Certificado Reconhecido</span>
        </div>
      </motion.div>

      <motion.div
        className='mt-16 mb-16 space-y-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className='text-center space-y-2'>
          <h2 className='text-sm font-semibold text-green-600 tracking-widest uppercase'>
            Interação, Conexão e Prática
          </h2>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white'>
            Evolua com o melhor do mercado
          </h1>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          <motion.div
            className='p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md flex flex-col gap-4 border border-gray-200 dark:border-gray-800'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className='text-green-600 font-semibold uppercase text-xs tracking-wider'>
              Estude
            </h3>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
              Aulas direto ao ponto
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
              Aulas gravadas para você assistir como e onde quiser, no seu
              ritmo, podendo rever e praticar na nossa plataforma.
            </p>
          </motion.div>

          <motion.div
            className='p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md flex flex-col gap-4 border border-gray-200 dark:border-gray-800'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h3 className='text-green-600 font-semibold uppercase text-xs tracking-wider'>
              Conecte-se
            </h3>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
              Encontros ao vivo
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
              Participe ao vivo com experts do mercado e aplique seu
              aprendizado. Acesso ilimitado aos encontros por um ano!
            </p>
          </motion.div>

          <motion.div
            className='p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md flex flex-col gap-4 border border-gray-200 dark:border-gray-800'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <h3 className='text-green-600 font-semibold uppercase text-xs tracking-wider'>
              Pratique
            </h3>
            <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
              Mão na massa
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
              Pratique cada habilidade com desafios reais do mercado, e construa
              seu portfólio enquanto aprende.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        className='mt-24 max-w-4xl mx-auto px-6 space-y-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className='text-center space-y-2'>
          <h2 className='text-sm font-semibold text-green-600 tracking-widest uppercase'>
            Para quem é o curso?
          </h2>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white'>
            Uma jornada para todos os perfis
          </h1>
        </div>

        <div className='relative border-l-4 border-green-600 dark:border-green-400 pl-8 space-y-16'>
          <motion.div
            className='relative'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <div className='absolute -left-[2.1rem] top-1 w-8 h-8 rounded-full bg-green-600 dark:bg-green-400 shadow-lg flex items-center justify-center text-white text-xl'>
              🧠
            </div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Profissionais de Produto iniciantes
            </h3>
            <p className='text-gray-700 dark:text-gray-300 mt-2'>
              Tenha acesso a desafios práticos, encontros quinzenais e uma
              comunidade exclusiva para criar novas conexões.
            </p>
          </motion.div>

          <motion.div
            className='relative'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            <div className='absolute -left-[2.1rem] top-1 w-8 h-8 rounded-full bg-green-600 dark:bg-green-400 shadow-lg flex items-center justify-center text-white text-xl'>
              🔄
            </div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Quem deseja migrar de carreira
            </h3>
            <p className='text-gray-700 dark:text-gray-300 mt-2'>
              Aprenda desde os fundamentos sobre a carreira de Produto com os
              melhores experts do mercado.
            </p>
          </motion.div>

          <motion.div
            className='relative'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <div className='absolute -left-[2.1rem] top-1 w-8 h-8 rounded-full bg-green-600 dark:bg-green-400 shadow-lg flex items-center justify-center text-white text-xl'>
              🚀
            </div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              Quem busca promoção ou recolocação
            </h3>
            <p className='text-gray-700 dark:text-gray-300 mt-2'>
              Consolide e amplie seus conhecimentos e acesse ferramentas
              práticas para aplicar no seu dia a dia.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className='mt-32 px-6 max-w-5xl mx-auto space-y-20'>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center space-y-3'
        >
          <h2 className='text-sm uppercase tracking-widest font-semibold text-green-600'>
            Carreira
          </h2>
          <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white'>
            Lorem ipsum dolor sit amet
          </h1>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-12 text-center'>
          {[
            {
              value: "70%",
              text: "Lorem ipsum dolor sit amet",
              source: "Lorem Ipsum Research 2023",
            },
            {
              value: "45%",
              text: "Sed do eiusmod tempor",
              source: "Lorem Ipsum Research 2023",
            },
            {
              value: "R$9.999,00",
              text: "Ut enim ad minim veniam",
              source: "IpsumJobs.com • 2023",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='space-y-3'
            >
              <p className='text-5xl font-extrabold text-green-600'>
                {item.value}
              </p>
              <p className='text-base text-gray-800 dark:text-gray-200'>
                {item.text}
              </p>
              <p className='text-xs text-gray-500'>Fonte: {item.source}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg'
        >
          <blockquote className='text-xl font-medium text-gray-900 dark:text-white leading-relaxed italic border-l-4 border-green-600 pl-6'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus.”
          </blockquote>
          <div className='mt-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6'>
            <div className='text-left'>
              <p className='font-semibold text-gray-900 dark:text-white'>
                John Doe
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Product Designer • Ipsum Inc.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className='mt-24 '
      >
        <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-6'>
          {loading ? <Skeleton width={160} /> : "Conteúdo do Curso"}
        </h2>

        <div className='space-y-8'>
          {loading
            ? [...Array(4)].map((_, idx) => (
                <div key={idx} className='space-y-2'>
                  <Skeleton width={200} height={20} />
                  <Skeleton count={2} />
                </div>
              ))
            : course?.modules?.map((module: Module, moduleIdx: number) => (
                <motion.div
                  key={module.title}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * moduleIdx }}
                  className='border-l-4 border-green-600 pl-4'
                >
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-1'>
                    {`${(moduleIdx + 1).toString().padStart(2, "0")}. ${
                      module.title
                    }`}
                  </h3>

                  <p className='text-gray-700 dark:text-gray-300 text-sm mb-2'>
                    Este módulo contém uma série de lições.
                  </p>

                  <ul className='pl-2 text-gray-600 dark:text-gray-400 text-sm space-y-1'>
                    {[...Array(module.lessons)].map((_, lessonIdx) => (
                      <li key={lessonIdx}>
                        {`${moduleIdx + 1}.${
                          lessonIdx + 1
                        } ${"Descricao do que vai ser ensinado na licao"}`}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
        </div>
      </motion.div>

      {!loading && (
        <motion.div
          className='mt-10 flex justify-center'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition duration-300 shadow-md disabled:opacity-50'
            onClick={handleEnrol}
            disabled={isPending}
            data-cy='enrol-button'
          >
            {isPending ? "Matriculando..." : "Matricule-se"}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
