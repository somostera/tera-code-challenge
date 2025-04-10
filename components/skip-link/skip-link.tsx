import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="bg-action absolute -top-full left-0 rounded-2xl border-2 p-2 text-[16px] font-bold text-black hover:-top-0 focus:-top-0"
    >
      Conteúdo principal
    </Link>
  );
}
