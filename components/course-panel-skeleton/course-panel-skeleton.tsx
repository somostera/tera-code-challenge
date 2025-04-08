export function CoursePanelSkeleton() {
  return (
    <>
      <div className="flex w-full flex-wrap gap-3">
        <span className="bg-gray text-gray flex-grow rounded-[8px] p-1 text-center font-sans text-[12px] font-extrabold uppercase select-none md:flex-none">
          Lorem
        </span>

        <span className="bg-gray text-gray flex-grow rounded-[8px] p-1 text-center font-sans text-[12px] font-extrabold uppercase select-none md:flex-none">
          ipsum
        </span>

        <span className="bg-gray text-gray flex-grow rounded-[8px] p-1 text-center font-sans text-[12px] font-extrabold uppercase select-none md:flex-none">
          dolor
        </span>
      </div>
      <h1 className="font-anton text-gray bg-gray mt-1 mb-5 inline-block text-left text-2xl font-extrabold md:text-4xl">
        Lorem ipsum dolor
      </h1>
      <p className="text-[16px]">
        <span className="text-gray bg-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem,
        </span>
        <span className="text-gray bg-gray">
          repellendus officiis dolores obcaecati, porro ipsam numquam
          perferendis
        </span>
        <span className="text-gray bg-gray">
          aspernatur nemo exercitationem veniam excepturi! Quod sed neque
          nesciunt tempora distinctio maxime!
        </span>
      </p>
      <h2 className="font-anton bg-gray text-gray mt-5 inline-block text-2xl">
        Módulos
      </h2>
      <ul>
        <li>
          <span className="bg-gray text-gray">
            lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
        </li>

        <li>
          <span className="bg-gray text-gray">
            lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
        </li>
      </ul>
      <button className="bg-gray text-gray mt-5 block cursor-pointer px-6 py-3 text-center font-extrabold uppercase">
        Matricular-se
      </button>
    </>
  );
}
