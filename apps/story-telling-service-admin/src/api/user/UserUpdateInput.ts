import { InputJsonValue } from "../../types";
import { StoryUpdateManyWithoutUsersInput } from "./StoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  stories?: StoryUpdateManyWithoutUsersInput;
  username?: string;
};
