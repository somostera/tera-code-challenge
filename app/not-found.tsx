import { Header } from "@/components/header";
import { MainLandmark } from "@/components/main-landmark";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <MainLandmark>
        <section className="mx-auto my-5 flex w-[90%] max-w-[700px] flex-col justify-center">
          <h1 className="font-anton mt-1 mb-5 text-center text-2xl font-extrabold md:text-4xl">
            Erro 404 - Página não encontrada
          </h1>
          <Link
            href="/"
            className="bg-action mx-auto cursor-pointer px-6 py-3 text-center font-extrabold text-black uppercase"
          >
            voltar para home
          </Link>
        </section>
      </MainLandmark>
    </>
  );
}
