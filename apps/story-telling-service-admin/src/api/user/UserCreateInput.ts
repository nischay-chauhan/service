import { InputJsonValue } from "../../types";
import { StoryCreateNestedManyWithoutUsersInput } from "./StoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  stories?: StoryCreateNestedManyWithoutUsersInput;
  username: string;
};
