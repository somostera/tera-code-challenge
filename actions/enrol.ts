'use server';

import { revalidatePath } from 'next/cache';

export async function enrol(courseId: number, userId: number) {
  console.log(`Usuário ${userId} matriculado no curso ${courseId}`);

  // Aqui faria a lógica de matricular.

  revalidatePath(`/curso/${courseId}`);
  return { success: true, message: 'Matrícula realizada com sucesso!' };
}