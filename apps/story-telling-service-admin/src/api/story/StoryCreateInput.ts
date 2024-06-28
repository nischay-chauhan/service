import { ChapterCreateNestedManyWithoutStoriesInput } from "./ChapterCreateNestedManyWithoutStoriesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoryCreateInput = {
  chapters?: ChapterCreateNestedManyWithoutStoriesInput;
  thumbnail?: InputJsonValue;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
