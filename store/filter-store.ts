import { create } from "zustand";
import fetchCategories from "@/actions/categories";
import fetchLevels from "@/actions/levels";

interface FilterState {
  category: string;
  level: string;
  categories: {
    data: Category[] | null;
    loading: boolean;
  };
  levels: {
    data: Level[] | null;
    loading: boolean;
  };
  setCategory: (category: string) => void;
  setLevel: (level: string) => void;
  resetFilters: () => void;
  fetchCategories: () => Promise<void>;
  fetchLevels: () => Promise<void>;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: "",
  level: "",
  categories: {
    data: null,
    loading: false,
  },
  levels: {
    data: null,
    loading: false,
  },
  setCategory: (category) => set({ category }),
  setLevel: (level) => set({ level }),
  resetFilters: () => set({ category: "", level: "" }),
  fetchCategories: async () => {
    set((state) => ({ categories: { ...state.categories, loading: true } }));

    const result = await fetchCategories();

    setTimeout(() => {
      set({ categories: { data: result, loading: false } });
    }, 1500);
  },
  fetchLevels: async () => {
    set((state) => ({ levels: { ...state.levels, loading: true } }));

    const result = await fetchLevels();

    setTimeout(() => {
      set({ levels: { data: result, loading: false } });
    }, 1500);
  },
}));
