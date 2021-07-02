import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Category {
  Universitario = "Universitario",
  Manga = "Manga",
  Technology = "Technology",
  Romance = "Romance",
  Infantil = "Infantil",
}

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 250,
    type: "character varying",
  })
  name: string;

  @Column({
    length: 80,
    type: "character varying",
  })
  author: string;

  @Column({
    type: "text",
    nullable: true,
  })
  description: string;

  @Column({
    length: 200,
    type: "character varying",
  })
  cover_picture: string;

  @Column({
    enum: Category,
    type: "enum",
  })
  category: string;

  @Column({
    type: "integer",
    default: 0,
  })
  stock: number;

  @Column("simple-array")
  users_who_liked: string[];
}
