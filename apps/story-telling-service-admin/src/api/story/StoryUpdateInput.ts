import { ChapterUpdateManyWithoutStoriesInput } from "./ChapterUpdateManyWithoutStoriesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoryUpdateInput = {
  chapters?: ChapterUpdateManyWithoutStoriesInput;
  thumbnail?: InputJsonValue;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
