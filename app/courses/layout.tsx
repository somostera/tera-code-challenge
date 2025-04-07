import Navbar from "@/components/Navbar";
import { CoursesProvider } from "@/context/SearchContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CoursesProvider>
      <div className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <footer className='bg-white border-t text-sm text-center text-gray-500 py-4 mt-8'>
          © {new Date().getFullYear()} Plataforma de Cursos. Todos os direitos
          reservados.
        </footer>
      </div>
    </CoursesProvider>
  );
}
