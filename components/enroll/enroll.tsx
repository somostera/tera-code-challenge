"use client";

import { enrollCourseAction } from "@/app/_actions/enroll-course";
import { pluralize } from "@/utils/pluralize";
import { useActionState } from "react";

export function Enroll() {
  const [state, formAction, pending] = useActionState(enrollCourseAction, {
    enrolled_count: 1,
  });

  return (
    <>
      <form action={formAction}>
        <button
          disabled={pending}
          className="bg-action disabled:bg-gray mt-5 block cursor-pointer px-6 py-3 text-center font-extrabold text-black uppercase disabled:cursor-wait"
        >
          Matricular-se
        </button>
      </form>

      <p className="mt-5 text-[18px]" aria-live="polite">
        <strong>{state.enrolled_count}</strong>{" "}
        {`${pluralize(state.enrolled_count, "Pessoa", "Pessoas")} já se ${pluralize(state.enrolled_count, "matriculou", "matricularam")} para
        este curso`}
      </p>
    </>
  );
}
