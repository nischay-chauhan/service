import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChapterWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  pictures?: JsonFilter;
  story?: StoryWhereUniqueInput;
  title?: StringNullableFilter;
};
