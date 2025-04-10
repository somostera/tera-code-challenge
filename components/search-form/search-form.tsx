"use client";

import { useContextDispatch } from "@/contexts/courses";
import { updateSearchParamsWithoutReload } from "@/utils/update-search-params-without-reload";
import { usePathname, useSearchParams } from "next/navigation";
import { FormEvent, useRef } from "react";

export function SearchForm() {
  const inputValue = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const dispatch = useContextDispatch();

  const selectCategories = [
    { label: "Nenhum", value: "" },
    { label: "Design", value: "design" },
    { label: "Desenvolvimento", value: "desenvolvimento" },
    { label: "Produto", value: "produto" },
    { label: "Dados", value: "dados" },
  ];

  const selectLevels = [
    { label: "Nenhum", value: "" },
    { label: "Iniciante", value: "iniciante" },
    { label: "Intermediário", value: "intermediario" },
    { label: "Avançado", value: "avancado" },
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputValue.current) {
      return;
    }

    dispatch({
      type: "set_search",
      payload: { search: inputValue.current.value },
    });

    updateSearchParamsWithoutReload(pathname, {
      search: inputValue.current.value,
      category: searchParams.get("category") ?? "",
      level: searchParams.get("level") ?? "",
    });
  }

  function handleChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: "set_category_filter",
      payload: { category: e.target.value },
    });
    updateSearchParamsWithoutReload(pathname, {
      search: searchParams.get("search") ?? "",
      category: e.target.value,
      level: searchParams.get("level") ?? "",
    });
  }

  function handleChangeLevel(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({ type: "set_level_filter", payload: { level: e.target.value } });
    updateSearchParamsWithoutReload(pathname, {
      search: searchParams.get("search") ?? "",
      category: searchParams.get("category") ?? "",
      level: e.target.value,
    });
  }
  return (
    <form onSubmit={handleSubmit} id="home-form">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
        <div className="flex">
          <input
            ref={inputValue}
            defaultValue={searchParams.get("search") ?? ""}
            type="text"
            role="searchbox"
            placeholder="Curso"
            aria-label="Nome do curso"
            className="w-[90%] max-w-[300px] bg-white p-3 font-extrabold text-black placeholder:font-extrabold"
          />
          <button className="bg-action block cursor-pointer p-3 text-center font-extrabold text-black uppercase md:px-6 md:py-3">
            Pesquisar
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <label
            htmlFor="categories"
            className="min-w-[100px] font-extrabold text-white lg:min-w-auto"
          >
            Categorias
          </label>
          <select
            name="categories"
            id="categories"
            className="w-full bg-white p-3 font-extrabold"
            onChange={handleChangeCategory}
            defaultValue={searchParams.get("category") ?? ""}
          >
            {selectCategories.map(({ label, value }) => (
              <option value={value} key={value} className="font-normal">
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2.5">
          <label
            htmlFor="level"
            className="min-w-[100px] font-extrabold text-white lg:min-w-auto"
          >
            Nível
          </label>
          <select
            name="level"
            id="level"
            className="w-full bg-white p-3 font-extrabold"
            onChange={handleChangeLevel}
            defaultValue={searchParams.get("level") ?? ""}
          >
            {selectLevels.map(({ label, value }) => (
              <option value={value} key={value} className="font-normal">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
