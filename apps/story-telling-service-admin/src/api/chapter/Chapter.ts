import { JsonValue } from "type-fest";
import { Story } from "../story/Story";

export type Chapter = {
  content: string | null;
  createdAt: Date;
  id: string;
  pictures: JsonValue;
  story?: Story | null;
  title: string | null;
  updatedAt: Date;
};
