import { Key } from "react";

export interface responseListBooks {
  index: Key | null | undefined;
  name: string,
  author: string,
  description: string, 
  cover_picture: string,
  category: string,
  stock: number,
  users_who_liked: Array<string>
}