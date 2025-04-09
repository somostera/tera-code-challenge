"use server";

export async function enrollCourseAction(previousState: {
  enrolled_count: number;
}) {
  await wait(3000);

  return { enrolled_count: previousState.enrolled_count + 1 };
}

async function wait(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}
