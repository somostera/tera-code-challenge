import { CardList } from "@/components/card-list";
import { Header } from "@/components/header";
import { MainLandmark } from "@/components/main-landmark";
import { SearchForm } from "@/components/search-form";
import { CoursesProvider } from "@/contexts/courses";
import { getCourses } from "@/services/get-courses";

type HomePageProps = {
  params: Promise<undefined>;
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { category = "", level = "", search = "" } = await searchParams;

  const { courses } = await getCourses();
  return (
    <CoursesProvider
      courses={courses}
      initialCategory={category}
      initialLevel={level}
      initialSearch={search}
    >
      <Header>
        <SearchForm />
      </Header>
      <MainLandmark>
        <h1 className="font-anton my-5 text-center text-2xl uppercase md:text-4xl">
          Conheça nossos cursos
        </h1>
        <CardList />
      </MainLandmark>
    </CoursesProvider>
  );
}
