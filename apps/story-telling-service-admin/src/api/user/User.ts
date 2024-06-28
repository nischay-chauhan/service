import { JsonValue } from "type-fest";
import { Story } from "../story/Story";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  stories?: Array<Story>;
  updatedAt: Date;
  username: string;
};
