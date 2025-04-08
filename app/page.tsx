import { CardList } from "@/components/card-list";
import { Header } from "@/components/header";
import { SearchForm } from "@/components/search-form";

export default async function Home() {
  return (
    <>
      <Header>
        <SearchForm />
      </Header>
      <main>
        <h1 className="font-anton my-5 text-center text-2xl uppercase md:text-4xl">
          Conheça nossos cursos
        </h1>
        <CardList />
      </main>
    </>
  );
}
