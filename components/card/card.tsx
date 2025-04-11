import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
};

export function Card({ id, title, description, category, level }: CardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="hover:bg-black-hover focus:bg-black-hover flex min-h-[420px] w-full max-w-[320px] flex-grow cursor-pointer grid-rows-[auto_auto_auto] flex-col justify-between bg-black p-4 text-white transition duration-300 ease-in-out hover:shadow-2xl focus:shadow-2xl motion-reduce:transition-none"
    >
      <div className="my-2.5 flex max-h-[120px] justify-center">
        <Image
          src="/design-icon.webp"
          alt=""
          width={120}
          height={120}
          priority
        />
      </div>
      <div>
        <h2 className="font-anton text-center text-2xl uppercase md:text-3xl">
          {title}
        </h2>
        <p className="text-gray mt-2">{description}</p>
      </div>
      <div>
        <div className="my-2.5 flex justify-between">
          <div className="flex flex-col">
            <strong className="font-bold">Categoria: </strong>
            <span>{category}</span>
          </div>
          <div className="flex flex-col">
            <strong className="font-bold">Nível: </strong>
            <span>{level}</span>
          </div>
        </div>
        <span className="bg-action block px-6 py-3 text-center font-extrabold text-black uppercase">
          mais detalhes
        </span>
      </div>
    </Link>
  );
}
