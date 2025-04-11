import Image from "next/image";
import { PropsWithChildren } from "react";

export function CourseContentWrapper({ children }: PropsWithChildren) {
  return (
    <section className="mx-auto my-10 grid w-[90%] max-w-[1000px] grid-cols-1 gap-3 md:grid-cols-2">
      <section className="order-2 md:order-1">{children}</section>
      <section className="order-1 md:order-2">
        <Image
          src="/course-banner.webp"
          alt=""
          width={1280}
          height={853}
          priority
        />
      </section>
    </section>
  );
}
