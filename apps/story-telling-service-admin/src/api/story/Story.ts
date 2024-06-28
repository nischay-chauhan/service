import { Chapter } from "../chapter/Chapter";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Story = {
  chapters?: Array<Chapter>;
  createdAt: Date;
  id: string;
  thumbnail: JsonValue;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
