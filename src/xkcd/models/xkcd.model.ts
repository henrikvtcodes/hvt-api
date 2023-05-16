import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType({ description: "An XKCD" })
export class XKCD {
  @Field(_type => ID)
  num: number
  link: string
  year: string
  news: string
  safe_title: string
  transcript: string
  alt: string
  img: string
  title: string
  day: string
  month: string
}