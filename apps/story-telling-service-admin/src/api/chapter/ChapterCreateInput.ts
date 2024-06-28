import { InputJsonValue } from "../../types";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChapterCreateInput = {
  content?: string | null;
  pictures?: InputJsonValue;
  story?: StoryWhereUniqueInput | null;
  title?: string | null;
};
