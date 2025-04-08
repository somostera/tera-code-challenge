import { CardList } from "@/components/card-list";
import { Header } from "@/components/header";
import { SearchForm } from "@/components/search-form";
import { CoursesProvider } from "@/contexts/courses";
import { getCourses } from "@/services/get-courses";

export default async function Home() {
  const { courses } = await getCourses();
  return (
    <CoursesProvider courses={courses}>
      <Header>
        <SearchForm />
      </Header>
      <main>
        <h1 className="font-anton my-5 text-center text-2xl uppercase md:text-4xl">
          Conheça nossos cursos
        </h1>
        <CardList />
      </main>
    </CoursesProvider>
  );
}
