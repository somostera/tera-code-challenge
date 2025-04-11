import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="bg-black">
      <section className="flex min-h-[90px] flex-col items-center gap-2 p-4 md:flex-row">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.svg" width={92} height={48} alt="Tera" />
        </Link>
        <section className="flex flex-grow justify-center">{children}</section>
      </section>
    </header>
  );
}
